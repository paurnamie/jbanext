"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                JAMES BADMINTON
                <br />
                ACADEMY
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Experience professional badminton training in a disciplined and competitive environment. Building champions with passion.
              </p>
              <div className="pt-2">
                <p className="text-sm text-foreground font-medium mb-2">Follow us on Instagram :</p>
                <a
                  href="https://www.instagram.com/jamesbadmintonacademyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>
                  <span>@james_badminton_academy</span>
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose Us? */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-6">Why Choose Us?</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>Certified Coaches</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>National-Level Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span>Safe Indoor Courts</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors block">
                  Programs
                </a>
              </li>
              <li>
                <a href="#coaches" className="text-muted-foreground hover:text-primary transition-colors block">
                  Coaches
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-pink-500" />
                <span>SRA-130, Pipeline Rd,<br />Marottichuvadu, Edappally, Kochi,<br />Kerala 682021</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-pink-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-gray-400" />
                <span>jamesbadminton@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 James Badminton Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
