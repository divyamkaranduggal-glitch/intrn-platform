"use client"

import { Shield, RefreshCw, Sparkles } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified companies",
  },
  {
    icon: RefreshCw,
    title: "Real application updates",
  },
  {
    icon: Sparkles,
    title: "Internships matched by fit, not payment",
  },
]

export function WhatWeDoSection() {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F0F0F] leading-tight tracking-tight">
          Internships should not<br className="hidden sm:block" /> feel broken.
        </h2>

        {/* Body copy */}
        <p className="mt-8 text-[#0F0F0F]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Students apply to hundreds of internships and hear back from almost none. Companies get flooded with irrelevant applications. The system is noisy, outdated, and impossible to trust.
        </p>

        {/* Secondary line */}
        <p className="mt-6 text-[#2D0ACD] font-semibold text-lg md:text-xl">
          intrn is building a trust-first internship marketplace for India.
        </p>

        {/* Feature cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 bg-[#F8F8F8] rounded-2xl border border-[#E5E5E5] transition-all duration-300 hover:border-[#2D0ACD]/20 hover:shadow-lg hover:shadow-[#2D0ACD]/5"
            >
              <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-xl bg-[#2D0ACD]/10 text-[#2D0ACD] group-hover:bg-[#2D0ACD] group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#0F0F0F] font-semibold text-base md:text-lg">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
