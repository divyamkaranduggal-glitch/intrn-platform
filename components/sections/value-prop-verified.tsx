"use client"

import { useEffect, useState, useRef } from "react"
import { Shield, CheckCircle, BadgeCheck } from "lucide-react"

export function ValuePropVerified() {
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
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #2D0ACD 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-3 py-1 bg-[#2D0ACD]/10 text-[#2D0ACD] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Trust-first
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] leading-[0.95] tracking-[-0.02em]">
              Verified<br />
              <span className="text-[#0A0A0A]/40">companies only.</span>
            </h2>
            
            <p className="mt-6 text-[#0A0A0A]/60 text-lg md:text-xl leading-relaxed max-w-md">
              No fake listings. No dead applications. Every company on intrn is manually reviewed and verified before they can post.
            </p>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-4">
              {["Manual review", "Real startups", "Active hiring"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A]/5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-[#0A0A0A] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual system - Trust network */}
          <div className={`relative h-[400px] md:h-[500px] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Central verified badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-8 bg-[#2D0ACD]/10 rounded-full blur-2xl animate-pulse-subtle" />
                
                {/* Badge */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#2D0ACD] to-[#4F35E8] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#2D0ACD]/30">
                  <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Orbiting verification nodes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Connection rings */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="#2D0ACD" strokeWidth="1" opacity="0.1" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="#2D0ACD" strokeWidth="1" opacity="0.1" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="#2D0ACD" strokeWidth="1" opacity="0.05" />
              
              {/* Animated connection lines */}
              <line x1="200" y1="200" x2="120" y2="100" stroke="#2D0ACD" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" className="animate-dash" />
              <line x1="200" y1="200" x2="280" y2="100" stroke="#2D0ACD" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" className="animate-dash" />
              <line x1="200" y1="200" x2="100" y2="250" stroke="#2D0ACD" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" className="animate-dash-reverse" />
              <line x1="200" y1="200" x2="300" y2="250" stroke="#2D0ACD" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" className="animate-dash-reverse" />
              <line x1="200" y1="200" x2="200" y2="350" stroke="#2D0ACD" strokeWidth="1" opacity="0.2" strokeDasharray="4,4" className="animate-dash" />
            </svg>

            {/* Floating company cards */}
            <div className="absolute left-[10%] top-[15%] animate-float">
              <CompanyCard name="TechStartup" verified />
            </div>
            <div className="absolute right-[5%] top-[10%] animate-float-delayed">
              <CompanyCard name="DesignCo" verified />
            </div>
            <div className="absolute left-[5%] bottom-[25%] animate-float-slow">
              <CompanyCard name="AI Labs" verified />
            </div>
            <div className="absolute right-[10%] bottom-[20%] animate-float">
              <CompanyCard name="Fintech Inc" verified />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] animate-float-delayed">
              <CompanyCard name="Startup X" verified />
            </div>

            {/* Pulse signals */}
            <div className="absolute left-[15%] top-[40%]">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse-subtle" />
            </div>
            <div className="absolute right-[20%] top-[35%]">
              <div className="w-2 h-2 bg-[#2D0ACD] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompanyCard({ name, verified }: { name: string; verified?: boolean }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-lg shadow-black/5 border border-[#0A0A0A]/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0A0A0A]/5 rounded-lg flex items-center justify-center">
          <span className="text-xs font-bold text-[#0A0A0A]/60">{name[0]}</span>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-[#0A0A0A] text-xs font-medium">{name}</span>
            {verified && <BadgeCheck className="w-3 h-3 text-[#2D0ACD]" />}
          </div>
          <span className="text-[#0A0A0A]/40 text-[10px]">Verified</span>
        </div>
      </div>
    </div>
  )
}
