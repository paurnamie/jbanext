"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Medal, Target, Trophy, Zap } from "lucide-react"

const programData = [
    {
        icon: Medal,
        title: "Beginner Program",
        features: [
            "Grip Correction and Basic Strokes",
            "Footwork and Movement",
            "Serve and Rally Control",
            "Court Positioning",
            "Basic Singles Game Play"
        ],
        details: [
            { label: "3 Days / Week", value: "₹2,500 / Month" },
            { label: "5 Days / Week", value: "₹3,000 / Month" }
        ],
        description: "This program builds the fundamentals and is ideal for beginners.",
    },
    {
        icon: Target,
        title: "Intermediate Training",
        features: [
            "Improved stroke timing and control",
            "Faster footwork and recovery",
            "Shot variation and placement",
            "Basic tactical understanding",
        ],
        details: [
            { label: "Duration", value: "6 Days / weeks" },
            { label: "Price", value: "₹3,500 / month" }
        ],
        description: "For club-level players wanting to refine technique and tactics.",
    },
    {
        icon: Trophy,
        title: "Adult Training",
        features: [
            "Structured training and Technical improvement",
            "Footwork and movement drills",
            "Tactical awareness and match strategy",
            "Guided matchplay and performance feedback"
        ],
        details: [
            { label: "Duration", value: "6 Days / Week" },
            { label: "Beginners", value: "₹3,000 / month" },
            { label: "Elites", value: "₹3,500 / month" }
        ],
        description: "Designed for athletes targeting national and international competition.",
    },
    {
        icon: Zap,
        title: "Weekend Sessions",
        features: [
            "Complete technical and footwork development",
            "Focused drill-based practice",
            "Guided matchplay sessions",
            "Designed for busy students and working professionals"
        ],
        details: [
            { label: "Price", value: "₹2000 / Month" }
        ],
        description: "Focused weekend training designed to sharpen skills and boost performance efficiently.",
    }
]

export function ProgramsSection() {
    return (
        <section id="programs" className="py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Our Programs
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Structured training paths designed to elevate your game at every level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {programData.map((program, index) => (
                        <FlipCard key={index} program={program} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FlipCard({ program, index }: { program: any; index: number }) {
    const [isFlipped, setIsFlipped] = useState(false)
    const Icon = program.icon

    return (
        <div
            className="relative h-[480px] w-full perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="h-full w-full bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="mb-6 p-4 rounded-full bg-gray-50 border border-border/50">
                            <Icon className="w-8 h-8 text-foreground" />
                        </div>

                        <h3 className="text-xl font-bold mb-8 text-foreground min-h-[56px] flex items-center justify-center">{program.title}</h3>

                        <div className="w-full space-y-6">
                            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                                WHAT YOU&apos;LL LEARN
                            </p>

                            <ul className="space-y-4">
                                {program.features.map((feature: string, i: number) => (
                                    <li key={i} className="text-muted-foreground font-medium text-sm">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Back of Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="h-full w-full bg-gray-100 p-7 flex flex-col justify-between text-gray-800 rounded-3xl shadow-xl">
                        <div className="text-center w-full h-full flex flex-col">
                            <h3 className="text-lg font-bold mb-8">{program.title}</h3>

                            <div className="space-y-4 text-left px-2 flex-grow">
                                {program.details.map((detail: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-300 pb-3">
                                        <span className="font-semibold opacity-80 text-sm">{detail.label}</span>
                                        <span className="font-bold text-right text-sm">{detail.value}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm leading-relaxed opacity-90 px-2 bg-white/50 p-4 rounded-xl">
                                {program.description}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
