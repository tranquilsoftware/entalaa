import { cn } from "../../lib/utils"
import { ReactNode } from "react"
import { UNICODE_CHAR, UNICODE_CHAR_2, UNICODE_CHAR_3 } from "../../globals"

interface AltBorderProps {
  children: ReactNode
  className?: string
}

export function AltBorder({ children, className }: AltBorderProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-red-900/20 rounded-lg"></div>
      <div className="absolute inset-[1px] bg-black rounded-lg"></div>
      <div className="relative z-10">{children}</div>
      {/* Alt corner decorations with unicode symbols */}
      <div className="absolute -top-3 -left-3 w-6 h-6 flex items-center justify-center text-red-400/60 text-xl">
        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>{UNICODE_CHAR_3}</span>
      </div>
      <div className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center text-purple-400/60 text-xl">
        <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>{UNICODE_CHAR}</span>
      </div>
      <div className="absolute -bottom-3 -left-3 w-6 h-6 flex items-center justify-center text-purple-400/60 text-xl">
        <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>{UNICODE_CHAR_2}</span>
      </div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 flex items-center justify-center text-red-400/60 text-xl">
        <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>{UNICODE_CHAR_3}</span>
      </div>
    </div>
  )
}
