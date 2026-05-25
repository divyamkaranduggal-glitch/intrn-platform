"use client"

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0F0F0F] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Questions */}
        <p className="text-white/40 text-sm font-medium tracking-wider uppercase mb-6">
          Questions?
        </p>

        {/* Email links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a 
            href="mailto:divyam@intrn.co.in" 
            className="text-white hover:text-white/80 text-base md:text-lg font-medium transition-colors duration-200"
          >
            divyam@intrn.co.in
          </a>
          <span className="hidden sm:block text-white/20">·</span>
          <a 
            href="mailto:pushpendra@intrn.co.in" 
            className="text-white hover:text-white/80 text-base md:text-lg font-medium transition-colors duration-200"
          >
            pushpendra@intrn.co.in
          </a>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom line */}
        <p className="text-white/30 text-sm">
          © intrn — Trust-first internships.
        </p>
      </div>
    </footer>
  )
}
