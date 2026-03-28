'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield,
  Code2,
  Cloud,
  BarChart3,
  Award
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="relative z-10">
              <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Innovative IT Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We Develop{' '}
                <span className="gradient-text">Cost-Effective</span>{' '}
                & Secure Digital Platforms
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Empowering businesses with agile, innovative, and cost-effective cloud data and analytics solutions. Transform your ideas into reality with our cutting-edge technology expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <button className="btn-3d btn-3d-primary ripple shine">
                    Discover More
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="btn-3d btn-3d-outline">
                    Our Services
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">100+</div>
                  <div className="text-muted-foreground text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
                  <div className="text-muted-foreground text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Main circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 animate-pulse-glow" />
                </div>
                {/* Floating elements */}
                <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-xl">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-xl">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-xl">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl animate-pulse-glow">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-muted-foreground hover:text-foreground">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              What We Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 section-title">
              Why Choose <span className="gradient-text">Garhites</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and a commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: 'Web Development', desc: 'Modern, responsive websites built with cutting-edge technologies for optimal performance.' },
              { icon: Cloud, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services for enterprise growth.' },
              { icon: BarChart3, title: 'Data Analytics', desc: 'Transform raw data into actionable business intelligence and insights.' },
              { icon: Shield, title: 'Security First', desc: 'Robust security measures to protect your digital assets and data.' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Agile methodology ensuring quick turnaround without compromising quality.' },
              { icon: Award, title: 'Expert Team', desc: 'Seasoned professionals with years of industry experience and expertise.' },
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-card hover:shadow-xl transition-all duration-300 card-3d">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <button className="btn-3d btn-3d-primary ripple shine">
                Explore All Services
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how our innovative solutions can help you achieve your goals.
              </p>
              <Link href="/contact">
                <button className="btn-3d bg-white text-purple-600 hover:bg-white/90 shadow-[0_4px_0_rgba(255,255,255,0.3),0_6px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_0_rgba(255,255,255,0.3),0_10px_30px_rgba(0,0,0,0.3)]">
                  Get Started Today
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
