'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">Garhites Solution LLP</span>
            </div>
            <p className="text-background/60 max-w-md mb-6">
              An emerging IT Technology and Services company developing and managing diverse portfolio on millennial technologies.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-background/60 hover:text-background transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-background/60 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-background/60 hover:text-background transition-colors">Services</Link></li>
              <li><Link href="/team" className="text-background/60 hover:text-background transition-colors">Team</Link></li>
              <li><Link href="/contact" className="text-background/60 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-background/60 hover:text-background transition-colors">Data Analysis</Link></li>
              <li><Link href="/services" className="text-background/60 hover:text-background transition-colors">Cloud Services</Link></li>
              <li><Link href="/services" className="text-background/60 hover:text-background transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-background/60 hover:text-background transition-colors">IT Consulting</Link></li>
              <li><Link href="/services" className="text-background/60 hover:text-background transition-colors">Server Hosting</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40">
          <p>&copy; {new Date().getFullYear()} Garhites Solution LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
