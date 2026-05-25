"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { SubmitState, WaitlistFormData } from "@/types/waitlist"

interface WaitlistFormProps {
  formData: WaitlistFormData
  setFormData: React.Dispatch<React.SetStateAction<WaitlistFormData>>
  onSubmit: (e: React.FormEvent) => void
  submitState?: SubmitState
  submitMessage?: string
  variant?: "hero" | "cta"
}

const sourceOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "friend", label: "Friend" },
  { value: "college", label: "College" },
  { value: "twitter", label: "Twitter/X" },
  { value: "other", label: "Other" },
]

export function WaitlistForm({
  formData,
  setFormData,
  onSubmit,
  submitState = { success: false, message: "" },
  submitMessage = "",
  variant = "hero",
}: WaitlistFormProps) {
  const isLoading = submitState === "loading"
  const buttonText = isLoading ? "Joining..." : variant === "cta" ? "Get early access" : "Join Waitlist"
  const messageClassName = submitState === "error" ? "text-red-200" : "text-white/70"

  if (variant === "cta") {
    return (
      <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="flex-1 h-12 px-5 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus:border-white/40 focus:ring-white/20 text-base"
            required
            disabled={isLoading}
          />
          <Button 
            type="submit"
            disabled={isLoading}
            className="h-12 px-8 bg-white text-[#2D0ACD] hover:bg-white/90 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {buttonText}
          </Button>
        </div>
        {submitMessage && (
          <p className={`mt-4 text-center text-sm ${messageClassName}`} aria-live="polite">
            {submitMessage}
          </p>
        )}
      </form>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full max-w-lg mx-auto">
      {/* Email - Primary field */}
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-14 px-5 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:border-white/40 focus:ring-white/20 text-lg"
          required
          disabled={isLoading}
        />
      </div>
      
      {/* Name and Source */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="flex-1 h-12 px-4 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:border-white/40 focus:ring-white/20"
          required
          disabled={isLoading}
        />
        <Select 
          value={formData.source} 
          onValueChange={(value) => setFormData({ ...formData, source: value })}
          disabled={isLoading}
        >
          <SelectTrigger className="flex-1 h-12 px-4 bg-white/10 border-white/20 text-white rounded-xl focus:border-white/40 focus:ring-white/20 [&>span]:text-white/50 data-[state=open]:border-white/40">
            <SelectValue placeholder="How did you hear about us?" />
          </SelectTrigger>
          <SelectContent className="bg-[#2D0ACD] border-white/20">
            {sourceOptions.map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        disabled={isLoading}
        className="w-full h-14 bg-white text-[#2D0ACD] hover:bg-white/90 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
      >
        {buttonText}
      </Button>
      {submitMessage && (
        <p className={`text-center text-sm ${messageClassName}`} aria-live="polite">
          {submitMessage}
        </p>
      )}
    </form>
  )
}
