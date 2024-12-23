"use client"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { useMotionValue, useSpring } from "framer-motion"

export default function Counter({ value = 0, direction = "up", className }) {
  const ref = useRef(null)

  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 200,
    stiffness: 200,
  })

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(latest);
      }
    })

    return () => unsubscribe()
  }, [springValue, value])
  return <span className={className} ref={ref}>0</span>
}