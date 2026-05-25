"use client"

import { useEffect, useState, useRef } from "react"
import { Send, Eye, Star, Calendar, Trophy } from "lucide-react"

const stages = [
  { id: "applied", label: "Applied", icon: Send, color: "from-slate-500 to-slate-600" },
  { id: "viewed", label: "Viewed", icon: Eye, color: "from-blue-500 to-blue-600" },
  { id: "shortlisted", label: "Shortlisted", icon: Star, color: "from-amber-500 to-amber-600" },
  { id: "interview", label: "Interview", icon: Calendar, color: "from-violet-500 to-violet-600" },
  { id: "offer", label: "Offer", icon: Trophy, color: "from-emerald-500 to-emerald-600" },
]

export function PipelineSection() {
  const [activeStage, setActiveStage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section id="pipeline" ref={sectionRef} className="relative bg-[#0A0A0A] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 bg-white/5 text-white/50 text-xs font-medium tracking-wider uppercase rounded-full mb-6">
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-[-0.02em]">
            Know where you<br />
            <span className="text-white/40">stand. Always.</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg md:text-xl max-w-xl mx-auto">
            Track every application from applied to offer. No more wondering if anyone even saw your resume.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden md:block" />
          
          {/* Progress line */}
          <div 
            className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-[#2D0ACD] to-emerald-500 -translate-y-1/2 transition-all duration-700 hidden md:block"
            style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
          />

          {/* Stages */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = index <= activeStage
              const isCurrent = index === activeStage
              
              return (
                <div 
                  key={stage.id}
                  className={`relative flex flex-col items-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Stage node */}
                  <div className={`relative ${isCurrent ? 'scale-110' : ''} transition-transform duration-300`}>
                    {/* Glow ring for current */}
                    {isCurrent && (
                      <>
                        <div className="absolute -inset-4 bg-[#2D0ACD]/20 rounded-full blur-xl animate-pulse-subtle" />
                        <div className="absolute -inset-2 border-2 border-[#2D0ACD]/30 rounded-full animate-signal" />
                      </>
                    )}
                    
                    {/* Node */}
                    <div className={`
                      relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center
                      transition-all duration-500
                      ${isActive 
                        ? `bg-gradient-to-br ${stage.color} shadow-lg shadow-current/20` 
                        : 'bg-white/5 border border-white/10'
                      }
                    `}>
                      <Icon className={`w-7 h-7 md:w-8 md:h-8 ${isActive ? 'text-white' : 'text-white/30'}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Label */}
                  <span className={`mt-4 font-semibold text-sm md:text-base transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/30'
                  }`}>
                    {stage.label}
                  </span>

                  {/* Status indicator */}
                  {isCurrent && (
                    <span className="mt-2 text-[#2D0ACD] text-xs font-medium animate-pulse-subtle">
                      Current stage
                    </span>
                  )}

                  {/* Mobile connector */}
                  {index < stages.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-white/10 mt-4">
                      <div 
                        className={`w-px h-full bg-[#2D0ACD] transition-transform duration-500 origin-top ${
                          isActive ? 'scale-y-100' : 'scale-y-0'
                        }`}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Floating status cards */}
        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-white/50 text-sm">Real-time</span>
            </div>
            <p className="text-white font-medium">Application viewed by recruiter</p>
            <p className="text-white/40 text-sm mt-1">2 hours ago</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-white/50 text-sm">Update</span>
            </div>
            <p className="text-white font-medium">Moved to shortlist</p>
            <p className="text-white/40 text-sm mt-1">Yesterday</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-white/50 text-sm">Success</span>
            </div>
            <p className="text-white font-medium">Offer received!</p>
            <p className="text-white/40 text-sm mt-1">Congratulations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
