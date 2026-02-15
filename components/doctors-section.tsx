"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const doctors = [
  {
    name: "Jenson James",
    title: "Head Coach",
    image: "/images/coach1.jpg",
    specialty: "Prakash Padukone Certified Coach",
    skills: "Sports & Child Psychology"
  },
  {
    name: "Sandhya Menon",
    title: "Assistant Coach",
    image: "/images/coach2.jpeg",
    specialty: "Certified Fitness & Nutrition Expert",
    skills: "Nutrition, Strength & Conditioning, Sports Psychology"
  },
  {
    name: "Athul Anand",
    title: "Assistant Coach",
    image: "/images/coach3.jpg",
    specialty: "10+ Years Coaching Experience",
    skills: "Advanced Match Strategy & Skill Development"
  },
]

export function DoctorsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="doctors" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 block">
            Expert Care
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our coaches are dedicated professionals committed to building champions on and off the court.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Image */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-3 border border-white/10">
                      {doctor.specialty}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-white/80 text-sm mb-6">{doctor.title}</p>
                    {doctor.skills && (
                      <p className="text-white/70 text-xs italic mb-4">{doctor.skills}</p>
                    )}

                    <Button
                      className="w-full bg-white text-black hover:bg-white/90 font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
