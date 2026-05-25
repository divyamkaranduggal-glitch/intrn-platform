"use client"

import { Eye, MessageCircle, Bell, CheckCircle } from "lucide-react"

interface FloatingFragmentProps {
  type: "notification" | "viewed" | "status" | "reply"
  className?: string
}

export function FloatingFragment({ type, className = "" }: FloatingFragmentProps) {
  const fragments = {
    notification: (
      <div className="animate-float bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <Bell className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-white text-xs font-medium">New opportunity</p>
            <p className="text-white/50 text-[10px]">3 min ago</p>
          </div>
        </div>
      </div>
    ),
    viewed: (
      <div className="animate-float-delayed bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-xl">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-400" />
          <span className="text-white text-xs">Application viewed</span>
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-subtle" />
        </div>
      </div>
    ),
    status: (
      <div className="animate-float-slow bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-xl">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-white text-xs font-medium">Shortlisted</span>
        </div>
        <p className="text-white/50 text-[10px] mt-1">Design Intern at Startup</p>
      </div>
    ),
    reply: (
      <div className="animate-float-reverse bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-xl">
        <div className="flex items-start gap-2">
          <MessageCircle className="w-4 h-4 text-violet-400 mt-0.5" />
          <div>
            <p className="text-white text-xs font-medium">{"We'd love to chat!"}</p>
            <p className="text-white/50 text-[10px]">Recruiter replied</p>
          </div>
        </div>
      </div>
    ),
  }

  return (
    <div className={className}>
      {fragments[type]}
    </div>
  )
}
