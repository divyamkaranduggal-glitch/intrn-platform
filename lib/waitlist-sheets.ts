import { google } from "googleapis"

export type WaitlistInsert = {
  email: string
  name: string
  source: string
  ipHash: string
  userAgent: string
}

export type WaitlistEntry = {
  id: string
  email: string
  name: string
  source: string
  createdAt: string
  userAgent: string
}

const headers = ["id", "email", "name", "source", "createdAt", "ipHash", "userAgent"]

function getConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n")
  const sheetName = process.env.GOOGLE_SHEETS_WAITLIST_TAB || "Waitlist"

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error("Google Sheets environment variables are not configured.")
  }

  return {
    spreadsheetId,
    clientEmail,
    privateKey,
    sheetName,
  }
}

function getSheetsClient() {
  const config = getConfig()
  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return {
    ...config,
    sheets: google.sheets({ version: "v4", auth }),
  }
}

function getRange(sheetName: string, range: string) {
  return `'${sheetName.replace(/'/g, "''")}'!${range}`
}

function toEntry(row: string[]): WaitlistEntry {
  return {
    id: row[0] ?? "",
    email: row[1] ?? "",
    name: row[2] ?? "",
    source: row[3] ?? "",
    createdAt: row[4] ?? "",
    userAgent: row[6] ?? "",
  }
}

async function ensureSheetReady() {
  const { sheets, spreadsheetId, sheetName } = getSheetsClient()

  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId })
  const hasSheet = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === sheetName)

  if (!hasSheet) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      },
    })
  }

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: getRange(sheetName, "A1:G1"),
  })

  if (!headerResponse.data.values?.[0]?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: getRange(sheetName, "A1:G1"),
      valueInputOption: "RAW",
      requestBody: {
        values: [headers],
      },
    })
  }

  return { sheets, spreadsheetId, sheetName }
}

export async function createWaitlistEntry(entry: WaitlistInsert) {
  const { sheets, spreadsheetId, sheetName } = await ensureSheetReady()
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: getRange(sheetName, "A2:G"),
  })
  const rows = existing.data.values ?? []
  const duplicate = rows.some((row) => String(row[1] ?? "").toLowerCase() === entry.email)

  if (duplicate) {
    return null
  }

  const createdAt = new Date().toISOString()
  const id = crypto.randomUUID()

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: getRange(sheetName, "A:G"),
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[id, entry.email, entry.name, entry.source, createdAt, entry.ipHash, entry.userAgent]],
    },
  })

  return {
    id,
    email: entry.email,
    name: entry.name,
    source: entry.source,
    createdAt,
    userAgent: entry.userAgent,
  }
}

export async function listWaitlistEntries() {
  const { sheets, spreadsheetId, sheetName } = await ensureSheetReady()
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: getRange(sheetName, "A2:G"),
  })

  return (response.data.values ?? [])
    .map((row) => toEntry(row as string[]))
    .filter((entry) => entry.email)
    .reverse()
}
