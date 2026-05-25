"use client"

import Image from "next/image"
import { FloatingAnnotation } from "@/components/floating-annotation"
import { FloatingFragment } from "@/components/floating-fragment"
import { NetworkAnimation } from "@/components/network-animation"
import { WaitlistForm } from "@/components/waitlist-form"
import type { SubmitState, WaitlistFormData } from "@/types/waitlist"

interface HeroSectionProps {
  formData: WaitlistFormData
  setFormData: React.Dispatch<React.SetStateAction<WaitlistFormData>>
  onSubmit: (e: React.FormEvent) => void
  submitState: SubmitState
  submitMessage: string
}

export function HeroSection({ formData, setFormData, onSubmit, submitState, submitMessage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#2D0ACD] overflow-hidden">
      <NetworkAnimation />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-BBuuw7NAYzUvMss94QMzHvKDTQBflU.png"
            alt="intrn"
            width={100}
            height={40}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#pipeline" 
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            How it works
          </a>
          <a 
            href="#vision" 
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Vision
          </a>
          <a 
            href="#waitlist" 
            className="px-6 py-3 bg-white text-[#2D0ACD] rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white/90 hover:scale-[1.02]"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-24 md:pb-32 text-center">
        {/* Floating context fragments */}
        <div className="hidden md:block absolute left-[6%] top-[20%]">
          <FloatingFragment type="notification" />
        </div>
        <div className="hidden lg:block absolute right-[7%] top-[26%]">
          <FloatingFragment type="viewed" />
        </div>
        <div className="hidden md:block absolute left-[10%] bottom-[22%]">
          <FloatingFragment type="status" />
        </div>
        <div className="hidden lg:block absolute right-[5%] bottom-[24%]">
          <FloatingFragment type="reply" />
        </div>

        {/* Handwritten annotations */}
        <FloatingAnnotation text="real updates" rotation={-6} className="hidden lg:block absolute left-[16%] top-[48%]" />
        <FloatingAnnotation text="verified only" rotation={-8} className="hidden lg:block absolute left-[9%] bottom-[33%]" />
        <FloatingAnnotation text="no ghosting" rotation={5} className="hidden lg:block absolute right-[10%] top-[52%]" />

        <div className="relative mx-auto max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.92] tracking-tight animate-fade-in-up">
            No internship<br />
            <span className="text-white/45">this summer?</span>
          </h1>
          
          <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
            Join the waitlist for India&apos;s first trust-first internship marketplace. Real companies. Real updates. Real opportunities.
          </p>

          {/* Waitlist Form */}
          <div id="waitlist" className="mt-10 md:mt-12 max-w-2xl mx-auto p-4 md:p-5 bg-white/10 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl shadow-black/10 animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
            <WaitlistForm 
              formData={formData} 
              setFormData={setFormData} 
              onSubmit={onSubmit}
              submitState={submitState}
              submitMessage={submitMessage}
            />
          </div>

          <p className="mt-6 text-white/50 text-sm animate-fade-in-up delay-300" style={{ animationFillMode: 'both' }}>
            Internship opportunities sent daily till launch
          </p>
        </div>
      </div>

      <div className="relative z-10 pb-5 text-center">
        <a href="#pipeline" className="inline-flex flex-col items-center gap-1 text-white/35 text-xs font-semibold tracking-wider uppercase">
          <span>See how it works</span>
          <span className="text-2xl leading-none">&darr;</span>
        </a>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2D0ACD]/50 to-transparent pointer-events-none" />
    </section>
  )
}
