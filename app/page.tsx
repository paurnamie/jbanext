import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Hero as AnimatedHero } from "@/components/ui/animated-hero"
import { SaleBanner } from "@/components/sale-banner"
import { DoctorsSection } from "@/components/doctors-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

import { VelocityScroll } from "@/components/ui/scroll-based-velocity"

import { ZoomParallax } from "@/components/ui/zoom-parallax"

import { ProgramsSection } from "@/components/programs-section";
import { Contact2 } from "@/components/ui/contact-2"

const parallaxImages = [
  {
    src: "/images/jba-logo.jpg",
    alt: "James Badminton Academy logo",
    title: "JAMES BADMINTON ACADEMY",
    subtitle: "Elite Training Excellence",
  },
  {
    src: "/images/1.jpg",
    alt: "Badminton player in action",
  },
  {
    src: "/images/2.jpg",
    alt: "Badminton court",
  },
  {
    src: "/images/3.jpg",
    alt: "Athletes training",
  },
  {
    src: "/images/4.jpg",
    alt: "Badminton equipment",
  },
  {
    src: "/images/5.jpg",
    alt: "Coaching session",
  },
  {
    src: "/images/6.jpg",
    alt: "Competitive badminton",
  },
];



import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="py-10 bg-background overflow-hidden">
        <VelocityScroll
          text="JAMES BADMINTON ACADEMY ELITE TRAINING"
          default_velocity={1}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground/10 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
      </div>
      <AboutSection />
      <AnimatedHero />
      <ProgramsSection />
      <SaleBanner />
      <DoctorsSection />
      <ZoomParallax images={parallaxImages} />
      <Contact2
        title="Get in Touch"
        description="Interested in joining James Badminton Academy? Contact us to discuss your training goals and enroll today."
        phone="97452 16499"
        email="Jamesacademyy@gmail.com"
        web={{ label: "jamesbadmintonacademy.com", url: "https://jamesbadmintonacademy.com" }}
      />
      <Footer />
    </main>
  )
}
