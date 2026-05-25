"use client"

import { cn } from "@/lib/utils"
import { CheckCircle, Eye, Star, Calendar, Gift } from "lucide-react"

type StatusType = "applied" | "viewed" | "shortlisted" | "interview" | "offer"

interface StatusCardProps {
  status: StatusType
  label: string
  time: string
  className?: string
}

const statusConfig: Record<StatusType, { 
  icon: React.ElementType
  bgColor: string
  iconColor: string
  borderColor: string
}> = {
  applied: {
    icon: CheckCircle,
    bgColor: "bg-white",
    iconColor: "text-[#2D0ACD]",
    borderColor: "border-white/20",
  },
  viewed: {
    icon: Eye,
    bgColor: "bg-white",
    iconColor: "text-blue-500",
    borderColor: "border-white/20",
  },
  shortlisted: {
    icon: Star,
    bgColor: "bg-white",
    iconColor: "text-amber-500",
    borderColor: "border-white/20",
  },
  interview: {
    icon: Calendar,
    bgColor: "bg-white",
    iconColor: "text-emerald-500",
    borderColor: "border-white/20",
  },
  offer: {
    icon: Gift,
    bgColor: "bg-white",
    iconColor: "text-[#FF3B3B]",
    borderColor: "border-white/20",
  },
}

export function StatusCard({ status, label, time, className }: StatusCardProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div 
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-sm",
        config.bgColor,
        "border",
        config.borderColor,
        "min-w-[180px] md:min-w-[200px]",
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-9 h-9 rounded-full",
        "bg-gray-50"
      )}>
        <Icon className={cn("w-5 h-5", config.iconColor)} strokeWidth={2} />
      </div>
      <div className="flex flex-col">
        <span className="text-[#0F0F0F] font-semibold text-sm">{label}</span>
        <span className="text-[#0F0F0F]/60 text-xs">{time}</span>
      </div>
    </div>
  )
}
