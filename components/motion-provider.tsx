"use client"

import type React from "react"
import { MotionConfig } from "framer-motion"

// Kdo má v systému omezené animace, uvidí jen prolínání, žádný pohyb.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
