"use client"

import { WaitlistForm } from "@/components/waitlist-form"
import type { SubmitState, WaitlistFormData } from "@/types/waitlist"
import { Sparkles } from "lucide-react"

interface FinalCtaSectionProps {
  formData: WaitlistFormData
  setFormData: React.Dispatch<React.SetStateAction<WaitlistFormData>>
  onSubmit: (e: React.FormEvent) => void
  submitState: SubmitState
  submitMessage: string
}

export function FinalCtaSection({ formData, setFormData, onSubmit, submitState, submitMessage }: FinalCtaSectionProps) {
  return (
    <section id="vision" className="relative bg-[#2D0ACD] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Orbiting particles - pre-computed positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: 15, top: 25, delay: 0, duration: 5.5 },
          { left: 80, top: 18, delay: 0.5, duration: 6 },
          { left: 35, top: 72, delay: 1, duration: 7 },
          { left: 68, top: 45, delay: 1.5, duration: 5 },
          { left: 22, top: 55, delay: 2, duration: 6.5 },
          { left: 85, top: 70, delay: 2.5, duration: 5.5 },
          { left: 50, top: 15, delay: 3, duration: 7.5 },
          { left: 42, top: 82, delay: 3.5, duration: 6 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-white/60" />
          <span className="text-white/70 text-sm font-medium">Launching soon</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-[-0.02em] text-balance">
          Get early access<br />
          <span className="text-white/50">before launch.</span>
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-white/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Daily internship opportunities till launch.
        </p>

        {/* Form */}
        <div className="mt-10 md:mt-12 max-w-md mx-auto">
          <WaitlistForm 
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            submitState={submitState}
            submitMessage={submitMessage}
            variant="cta"
          />
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-white/50 text-sm">Verified companies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-white/50 text-sm">Real-time updates</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full" />
            <span className="text-white/50 text-sm">Smart matching</span>
          </div>
        </div>
      </div>
    </section>
  )
}
