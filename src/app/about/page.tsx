'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Code2, 
  Globe, 
  BarChart3, 
  Server, 
  Users,
  Award,
  Shield,
  Zap,
  Sparkles,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react'

export default function AboutPage() {
  const features = [
    { icon: Code2, title: 'High End Web Development', desc: 'Modern, responsive websites built with cutting-edge technologies' },
    { icon: Globe, title: 'Application Development', desc: 'Custom mobile and web applications tailored to your needs' },
    { icon: BarChart3, title: 'Deep Insight Data Analytics', desc: 'Transform raw data into actionable business intelligence' },
    { icon: Server, title: 'Server Hosting Services', desc: 'Reliable, secure, and scalable hosting solutions' },
    { icon: Users, title: 'IT Consulting & Support', desc: 'Expert guidance and 24/7 technical support' },
  ]

  const values = [
    { icon: Target, title: 'Mission', desc: 'To empower businesses with innovative technology solutions that drive growth and operational excellence.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.' },
    { icon: Heart, title: 'Integrity', desc: 'We build lasting relationships through transparency, honesty, and ethical business practices.' },
  ]

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
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Digital <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Garhites Solution is an emerging IT Technology and Services company developing and managing diverse portfolio on millennial technologies.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <Award className="w-20 h-20 text-white/80" />
                      </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-32 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                        <Shield className="w-16 h-16 text-white/80" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-32 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                        <Zap className="w-16 h-16 text-white/80" />
                      </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-48 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Sparkles className="w-20 h-20 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Garhites Solution LLP is led by professionals with several years of experience in IT and services industry. Our experts have the track record of delivering some of the best solutions and services in the industry and have built a reputation that is unrivalled in the marketplace.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We are committed to delivering innovative solutions that drive business growth and operational excellence. Our team combines technical expertise with business acumen to create solutions that truly make a difference.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 section-title">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-card hover:shadow-xl transition-all duration-300 card-3d">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
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
                Partner With Us
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.
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
