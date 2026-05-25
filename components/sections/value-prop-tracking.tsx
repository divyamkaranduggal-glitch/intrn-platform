"use client"

import { useEffect, useState, useRef } from "react"
import { Eye, ArrowRight, Send, Star, Calendar, Trophy, MessageCircle } from "lucide-react"

export function ValuePropTracking() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [isVisible])

  const timeline = [
    { icon: Send, label: "Applied", time: "Just now", color: "bg-slate-500" },
    { icon: Eye, label: "Viewed", time: "2h ago", color: "bg-blue-500" },
    { icon: Star, label: "Shortlisted", time: "Yesterday", color: "bg-amber-500" },
    { icon: Calendar, label: "Interview", time: "Tomorrow", color: "bg-violet-500" },
    { icon: Trophy, label: "Offer!", time: "Soon", color: "bg-emerald-500" },
  ]

  return (
    <section ref={sectionRef} className="relative bg-[#0A0A0A] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#2D0ACD]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual system - Timeline tracker */}
          <div className={`relative order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main timeline card */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
              {/* App header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2D0ACD] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">in</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Application Tracker</p>
                    <p className="text-white/40 text-sm">Design Intern at TechCo</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
                  <span className="text-emerald-400 text-xs font-medium">Active</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {timeline.map((step, index) => {
                  const Icon = step.icon
                  const isActive = index <= currentStep
                  const isCurrent = index === currentStep
                  
                  return (
                    <div key={index} className="flex items-start gap-4">
                      {/* Node */}
                      <div className="relative flex flex-col items-center">
                        <div className={`
                          w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                          ${isActive ? step.color : 'bg-white/10'}
                          ${isCurrent ? 'ring-2 ring-white/20 ring-offset-2 ring-offset-[#0A0A0A]' : ''}
                        `}>
                          <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/30'}`} strokeWidth={1.5} />
                        </div>
                        {/* Connector line */}
                        {index < timeline.length - 1 && (
                          <div className="w-px h-8 mt-2 bg-white/10">
                            <div className={`w-full transition-all duration-500 ${isActive ? 'h-full bg-white/30' : 'h-0'}`} />
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium transition-colors ${isActive ? 'text-white' : 'text-white/30'}`}>
                            {step.label}
                          </span>
                          <span className={`text-sm ${isActive ? 'text-white/50' : 'text-white/20'}`}>
                            {step.time}
                          </span>
                        </div>
                        {isCurrent && (
                          <div className="mt-2 flex items-center gap-2 text-[#2D0ACD]">
                            <div className="w-1.5 h-1.5 bg-[#2D0ACD] rounded-full animate-pulse" />
                            <span className="text-xs font-medium">Current status</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-4 -right-4 md:right-8 animate-float bg-white rounded-xl p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#2D0ACD]" />
                <span className="text-[#0A0A0A] text-xs font-medium">Recruiter replied!</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Transparency
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95] tracking-[-0.02em]">
              Know where<br />
              <span className="text-white/40">you stand.</span>
            </h2>
            
            <p className="mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-md">
              Track every application from applied to offer. No more wondering if anyone even saw your resume. Real-time updates, always.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                <div className="text-white/40 text-sm mt-1">Application visibility</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">Real-time</div>
                <div className="text-white/40 text-sm mt-1">Status updates</div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 group flex items-center gap-2 text-[#2D0ACD] font-medium">
              <span>See how it works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
