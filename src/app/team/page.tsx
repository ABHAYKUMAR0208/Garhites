'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react'

export default function TeamPage() {
  const team = [
    { name: 'Rohit Nautiyal', role: 'Director', bio: 'Leading strategic initiatives and business development.' },
    { name: 'Dr. Anchit Bijlwan', role: 'Director', bio: 'Overseeing operations and strategic partnerships.' },
    { name: 'K. Manish', role: 'CTO', bio: 'Driving technology innovation and architecture decisions.' },
    { name: 'Shewani Negi', role: 'UI/UX Consultant', bio: 'Creating intuitive and engaging user experiences.' },
    { name: 'Shivani Sharma', role: 'HR/Admin Manager', bio: 'Managing human resources and administration.' },
    { name: 'Dakshesh Nautiyal', role: 'Sr. Sales & Marketing Manager', bio: 'Driving sales growth and market expansion.' },
    { name: 'Gajendra Ramola', role: 'Technical Lead (Development)', bio: 'Leading development teams and technical projects.' },
  ]

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2)
  }

  const getGradient = (index: number) => {
    const gradients = [
      'from-purple-500 to-purple-600',
      'from-cyan-500 to-cyan-600',
      'from-pink-500 to-pink-600',
      'from-amber-500 to-orange-500',
      'from-emerald-500 to-teal-500',
      'from-rose-500 to-red-500',
      'from-indigo-500 to-violet-500',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Meet The <span className="gradient-text">Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Garhites Solution LLP is led by professionals with several years of experience in IT and services industry. Our experts have the track record of delivering some of the best solutions and services in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card group">
                <div className="relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Avatar */}
                  <div className={`w-full h-64 bg-gradient-to-br ${getGradient(index)} flex items-center justify-center`}>
                    <span className="text-5xl font-bold text-white/90">{getInitials(member.name)}</span>
                  </div>
                  
                  {/* Overlay with social links */}
                  <div className="team-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              Join Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We&apos;re Always Looking for <span className="gradient-text">Talent</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team of innovators and make an impact in the world of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Growth Opportunities', desc: 'Continuous learning and career advancement' },
              { title: 'Innovative Culture', desc: 'Work on cutting-edge technologies' },
              { title: 'Great Benefits', desc: 'Competitive compensation and perks' },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card">
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="btn-3d btn-3d-primary ripple shine">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 p-12 md:p-16 text-white text-center">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Our team is ready to help you achieve your business goals.
              </p>
              <Link href="/contact">
                <button className="btn-3d bg-white text-purple-600 hover:bg-white/90 shadow-[0_4px_0_rgba(255,255,255,0.3),0_6px_20px_rgba(0,0,0,0.2)]">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
