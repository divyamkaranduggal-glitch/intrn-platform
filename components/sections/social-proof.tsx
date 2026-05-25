"use client"

const testimonials = [
  {
    text: "Applied to 80 internships. Heard back from 2.",
    handle: "@frustrated_student",
    platform: "twitter",
  },
  {
    text: "Finally knew if my application was even seen.",
    handle: "@hopeful_intern",
    platform: "twitter",
  },
  {
    text: "Small startups deserve visibility too.",
    handle: "@startup_founder",
    platform: "twitter",
  },
]

export function SocialProofSection() {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#0F0F0F]/40 text-sm font-medium tracking-wider uppercase">
            The problem is real
          </span>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-6 md:p-8 bg-[#0F0F0F] rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Platform indicator */}
              <div className="absolute top-4 right-4">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 text-white/30"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              {/* Handle */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <span className="text-white/50 text-sm">
                  {testimonial.handle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
