"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollYLimit, setScrollYLimit] = useState(50)
  const [scaleLimit, setScaleLimit] = useState(1.2)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024
      setScrollYLimit(isMobile ? 200 : 500)
      setScaleLimit(isMobile ? 1.2 : 1.8)
    }

    // Set initial values
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  })

  const toothY = useTransform(smoothProgress, [0, 1], [0, scrollYLimit])
  const toothScale = useTransform(smoothProgress, [0, 1], [1, scaleLimit])
  const textY = useTransform(smoothProgress, [0, 1], [0, 50])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative min-h-screen h-auto flex items-center justify-center pt-20"
      style={{
        overflowX: "clip",
      }}
    >
      {/* White semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/30 z-0" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative will-change-transform"
        >
          {/* Shadow/depth layers */}
          <span
            className="absolute text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.02] blur-[2px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              transform: "translate(8px, 8px)",
            }}
          >
            JBA
          </span>
          <span
            className="absolute text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.03] blur-[1px]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              transform: "translate(4px, 4px)",
            }}
          >
            JBA
          </span>
          {/* Main text */}
          <span
            className="text-[12vw] font-medium tracking-tight whitespace-nowrap text-foreground/[0.06]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            JBA
          </span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Text */}
          <motion.div className="flex flex-col justify-center pt-20 lg:pt-0 will-change-transform" style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-sm font-medium tracking-widest text-foreground/60 uppercase">
                Elite Badminton Training
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {/* Depth shadow layers */}
              <span
                className="absolute inset-0 text-accent/30 blur-[1px]"
                style={{ transform: "translate(4px, 4px)" }}
                aria-hidden="true"
              >
                JAMES BADMINTON ACADEMY
              </span>
              <span
                className="absolute inset-0 text-accent/20 blur-[0.5px]"
                style={{ transform: "translate(2px, 2px)" }}
                aria-hidden="true"
              >
                JAMES BADMINTON ACADEMY
              </span>
              {/* Main text */}
              <span className="relative">JAMES BADMINTON ACADEMY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-foreground/70 max-w-md mb-8 leading-relaxed"
            >
              Professional badminton training with expert coaches, competitive programs, and proven coaching methodologies for all skill levels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-base rounded-full group"
                onClick={() => window.open('https://wa.me/919745216499?text=Hi%2C%20I%20want%20to%20start%20training', '_blank')}
              >
                Start Training
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Shuttlecock */}
          <motion.div className="relative flex items-center justify-center z-20 will-change-transform" style={{ y: toothY, scale: toothScale }}>
            {/* Shadow beneath shuttlecock */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/20 rounded-full blur-2xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Shuttlecock with floating animation */}
              <motion.img
                src="/images/shuttle.png"
                alt="Badminton Shuttlecock"
                className="relative w-72 sm:w-80 lg:w-96 h-auto drop-shadow-2xl will-change-transform"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Glow effect around shuttlecock */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}
