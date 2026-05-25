"use client"

export function VisionSection() {
  return (
    <section id="vision" className="relative bg-[#F8F8F8] py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Label */}
        <span className="inline-block text-[#2D0ACD] text-sm font-semibold tracking-wider uppercase mb-6">
          The vision
        </span>

        {/* Main copy */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0F0F0F] leading-snug font-medium">
          {"We're building a trust-first internship marketplace where companies get verified students, and students get replies from every internship they apply to."}
        </p>

        {/* Handwritten annotation */}
        <p 
          className="mt-10 text-[#2D0ACD]/70 text-2xl md:text-3xl"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          {"That's it."}
        </p>
      </div>
    </section>
  )
}
