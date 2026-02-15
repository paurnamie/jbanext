import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://jamesbadmintonacademy.com"),
  title: {
    default: "James Badminton Academy | Premier Coaching & Training in Kochi",
    template: "%s | James Badminton Academy"
  },
  description: "Join James Badminton Academy for elite badminton coaching in Kochi. Professional training for beginners to advanced players, personalized sessions, and world-class facilities. Start your journey with certified coaches.",
  keywords: [
    "Badminton Academy Kochi",
    "Badminton Coaching Kerala",
    "Professional Badminton Training",
    "Badminton Classes for Kids",
    "Adult Badminton Training",
    "Certified Badminton Coaches",
    "Private Badminton Lessons",
    "Badminton Court Booking",
    "Sports Academy Kochi",
    "Elite Sports Training"
  ],
  authors: [{ name: "James Badminton Academy", url: "https://jamesbadmintonacademy.com" }],
  creator: "James Badminton Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamesbadmintonacademy.com",
    title: "James Badminton Academy | Premier Coaching & Training in Kochi",
    description: "Experience top-tier badminton coaching at James Badminton Academy. We offer structured programs for all ages and skill levels with expert guidance.",
    siteName: "James Badminton Academy",
    images: [
      {
        url: "/images/jba-logo.jpg",
        width: 1200,
        height: 630,
        alt: "James Badminton Academy Coaching Session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Badminton Academy | Elite Training",
    description: "Join James Badminton Academy for professional badminton coaching. Elevate your game with our expert team.",
    images: ["/images/jba-logo.jpg"],
  },
  alternates: {
    canonical: "https://jamesbadmintonacademy.com",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/apple-icon.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import { Preloader } from "@/components/preloader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <Preloader />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
