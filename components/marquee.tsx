"use client"

export function Marquee() {
  const items = [
    "verified companies",
    "real replies",
    "transparent stipends", 
    "no fake listings",
    "matched by fit",
    "trusted applications",
    "real opportunities",
    "application tracking",
  ]

  return (
    <div className="bg-[#0A0A0A] py-4 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-white/40 text-sm font-medium uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#2D0ACD] rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
