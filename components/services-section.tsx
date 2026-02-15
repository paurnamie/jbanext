"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Beginner Program",
    description: "Master the fundamentals with expert coaching. Learn proper technique, footwork, and court awareness.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Intermediate Training",
    description: "Develop advanced techniques, game strategy, and competitive skills for tournament play.",
    image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Advanced Coaching",
    description: "Elite-level training with specialized focus on competitive excellence and performance optimization.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Junior Academy",
    description: "Specialized program for young talents (6-12 years) with fun-based learning and skill development.",
    image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ladies Program",
    description: "Dedicated coaching for women players with personalized training plans and supportive environment.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Corporate Wellness",
    description: "Team-building badminton programs and fitness training for corporate groups and organizations.",
    image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Tournament Preparation",
    description: "Intensive camps and match training to prepare athletes for competitive tournaments at all levels.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="services" className="py-24 bg-secondary/30">
      <div className="w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Training Programs
          </h2>
        </motion.div>

        {/* Services Horizontal Scroll */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="flex gap-6 px-4 sm:px-6 lg:px-8 min-w-max">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 w-[300px] sm:w-[350px] flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-foreground hover:text-foreground/80 group/btn"
                  >
                    View Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
