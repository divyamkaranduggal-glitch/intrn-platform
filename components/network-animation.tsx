"use client"

// Pre-computed particle positions to avoid hydration mismatch
const particles = [
  { left: 15, top: 20, delay: 0, duration: 5 },
  { left: 75, top: 35, delay: 0.5, duration: 6 },
  { left: 45, top: 55, delay: 1, duration: 4.5 },
  { left: 85, top: 15, delay: 1.5, duration: 7 },
  { left: 25, top: 70, delay: 2, duration: 5.5 },
  { left: 65, top: 80, delay: 2.5, duration: 6.5 },
  { left: 35, top: 40, delay: 3, duration: 4 },
  { left: 55, top: 25, delay: 3.5, duration: 7.5 },
  { left: 20, top: 85, delay: 4, duration: 5 },
  { left: 80, top: 60, delay: 4.5, duration: 6 },
  { left: 40, top: 10, delay: 5, duration: 4.5 },
  { left: 70, top: 45, delay: 5.5, duration: 5.5 },
]

export function NetworkAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated connection lines */}
        <g className="opacity-30">
          <path
            d="M100,200 Q400,100 700,300"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="animate-dash"
          />
          <path
            d="M200,400 Q500,200 800,400"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="animate-dash-reverse"
          />
          <path
            d="M0,300 Q300,500 600,200"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="animate-dash"
            style={{ animationDelay: '0.5s' }}
          />
        </g>
      </svg>

      {/* Orbiting nodes */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Inner orbit */}
        <div className="absolute w-3 h-3 bg-white/20 rounded-full animate-orbit" style={{ animationDuration: '15s' }}>
          <div className="absolute inset-0 bg-white/40 rounded-full animate-pulse-subtle" />
        </div>
        
        {/* Middle orbit */}
        <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-orbit-reverse" style={{ animationDuration: '20s' }} />
        
        {/* Outer orbit */}
        <div className="absolute w-4 h-4 bg-white/15 rounded-full animate-orbit-slow" style={{ animationDuration: '25s' }}>
          <div className="absolute inset-1 bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Floating particles - pre-computed positions */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Signal rings emanating from center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 border border-white/5 rounded-full animate-signal" style={{ animationDelay: '0s' }} />
        <div className="absolute inset-0 w-32 h-32 border border-white/5 rounded-full animate-signal" style={{ animationDelay: '0.7s' }} />
        <div className="absolute inset-0 w-32 h-32 border border-white/5 rounded-full animate-signal" style={{ animationDelay: '1.4s' }} />
      </div>

      {/* Opportunity particles flowing */}
      <div className="absolute left-0 top-1/2 w-2 h-2 bg-emerald-400/40 rounded-full"
        style={{ 
          animation: 'particle-flow 8s linear infinite',
          '--flow-x': '100vw',
          '--flow-y': '-100px'
        } as React.CSSProperties}
      />
      <div className="absolute left-0 top-1/3 w-1.5 h-1.5 bg-white/30 rounded-full"
        style={{ 
          animation: 'particle-flow 10s linear infinite 2s',
          '--flow-x': '100vw',
          '--flow-y': '50px'
        } as React.CSSProperties}
      />
      <div className="absolute left-0 top-2/3 w-2 h-2 bg-blue-300/30 rounded-full"
        style={{ 
          animation: 'particle-flow 12s linear infinite 4s',
          '--flow-x': '100vw',
          '--flow-y': '-80px'
        } as React.CSSProperties}
      />

      {/* Corner accents */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-white/5 rounded-full opacity-50" />
      <div className="absolute bottom-32 right-32 w-16 h-16 border border-white/5 rounded-full opacity-50" />
      <div className="absolute top-40 right-20 w-8 h-8 bg-white/5 rounded-full" />
      <div className="absolute bottom-40 left-32 w-6 h-6 bg-white/5 rounded-full" />
    </div>
  )
}
