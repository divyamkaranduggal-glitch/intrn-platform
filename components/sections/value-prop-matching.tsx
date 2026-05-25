"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, User, Building2, ArrowRight } from "lucide-react"

export function ValuePropMatching() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#2D0ACD]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-3 py-1 bg-[#2D0ACD]/10 text-[#2D0ACD] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Smart matching
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] leading-[0.95] tracking-[-0.02em]">
              Built for real<br />
              <span className="text-[#0A0A0A]/40">opportunities.</span>
            </h2>
            
            <p className="mt-6 text-[#0A0A0A]/60 text-lg md:text-xl leading-relaxed max-w-md">
              Internships matched by fit, not whoever paid to be seen. Our algorithm connects you with opportunities that actually make sense for your skills and interests.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              {[
                "Skill-based matching",
                "Interest alignment",
                "Location preferences",
                "Stipend transparency",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-[#0A0A0A]/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-10 group flex items-center gap-2 text-[#2D0ACD] font-medium">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Visual system - Matching network */}
          <div className={`relative h-[400px] md:h-[500px] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* SVG Network visualization */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Connection arcs */}
              <defs>
                <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2D0ACD" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#2D0ACD" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Animated connection paths */}
              <path
                d="M80,150 Q200,50 320,150"
                fill="none"
                stroke="url(#matchGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-dash"
              />
              <path
                d="M80,200 Q200,150 320,200"
                fill="none"
                stroke="url(#matchGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-dash-reverse"
              />
              <path
                d="M80,250 Q200,200 320,250"
                fill="none"
                stroke="url(#matchGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-dash"
              />
              <path
                d="M80,300 Q200,350 320,300"
                fill="none"
                stroke="url(#matchGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-dash-reverse"
              />
            </svg>

            {/* Left side - Students */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6">
              {["Alex", "Priya", "Rahul", "Sneha"].map((name, i) => (
                <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                  <StudentNode name={name} />
                </div>
              ))}
            </div>

            {/* Center - Matching indicator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse-subtle" />
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Right side - Companies */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6">
              {["TechCo", "DesignLab", "AI Startup", "FinApp"].map((name, i) => (
                <div key={i} className="animate-float-delayed" style={{ animationDelay: `${i * 0.3}s` }}>
                  <CompanyNode name={name} />
                </div>
              ))}
            </div>

            {/* Floating match indicators */}
            <div className="absolute left-1/4 top-[20%] animate-float">
              <MatchBadge score={95} />
            </div>
            <div className="absolute right-1/4 top-[30%] animate-float-delayed">
              <MatchBadge score={88} />
            </div>
            <div className="absolute left-1/3 bottom-[25%] animate-float-slow">
              <MatchBadge score={92} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StudentNode({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl p-2 pr-4 shadow-lg shadow-black/5 border border-[#0A0A0A]/5">
      <div className="w-8 h-8 bg-[#2D0ACD]/10 rounded-lg flex items-center justify-center">
        <User className="w-4 h-4 text-[#2D0ACD]" />
      </div>
      <span className="text-[#0A0A0A] text-sm font-medium">{name}</span>
    </div>
  )
}

function CompanyNode({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl p-2 pr-4 shadow-lg shadow-black/5 border border-[#0A0A0A]/5">
      <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
        <Building2 className="w-4 h-4 text-emerald-500" />
      </div>
      <span className="text-[#0A0A0A] text-sm font-medium">{name}</span>
    </div>
  )
}

function MatchBadge({ score }: { score: number }) {
  return (
    <div className="bg-white rounded-lg px-2 py-1 shadow-lg border border-emerald-200">
      <span className="text-emerald-600 text-xs font-bold">{score}% match</span>
    </div>
  )
}
