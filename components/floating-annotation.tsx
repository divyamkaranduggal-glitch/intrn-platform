"use client"

interface FloatingAnnotationProps {
  text: string
  className?: string
  rotation?: number
}

export function FloatingAnnotation({ text, className = "", rotation = 0 }: FloatingAnnotationProps) {
  return (
    <div 
      className={`font-hand text-2xl md:text-3xl text-white/50 animate-wiggle ${className}`}
      style={{ "--annotation-rotation": `${rotation}deg` } as React.CSSProperties}
    >
      <span className="relative">
        {text}
        <svg 
          className="absolute -bottom-1 left-0 w-full" 
          height="8" 
          viewBox="0 0 100 8" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,4 Q25,0 50,4 T100,4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  )
}
