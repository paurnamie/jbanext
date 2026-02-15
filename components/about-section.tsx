"use client"

import { motion } from "framer-motion"

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-24 bg-background overflow-hidden"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide">
                            ABOUT US
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                            Building Champions <br className="hidden md:block" /> On & Off the Court
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            James Badminton Academy is a high-performance training center dedicated to nurturing badminton talent at every level. Our mission is to provide structured, professional coaching that transforms passion into excellence.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            With experienced coaches, modern training methodologies, and a strong focus on discipline and fitness, we help players unlock their true potential and compete with confidence.
                        </p>

                        <ul className="space-y-3 mt-6">
                            {[
                                "Certified & experienced coaching staff",
                                "Professional training for all age groups",
                                "Focus on technique, fitness & mindset",
                                "Proven success in competitive tournaments"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-muted-foreground font-medium">
                                    <span className="mr-3 text-primary text-lg">✔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</h3>
                            <p className="text-base font-medium text-muted-foreground">Years of Coaching Experience</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</h3>
                            <p className="text-base font-medium text-muted-foreground">Players Trained</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</h3>
                            <p className="text-base font-medium text-muted-foreground">Tournament Wins</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</h3>
                            <p className="text-base font-medium text-muted-foreground">Commitment to Excellence</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
