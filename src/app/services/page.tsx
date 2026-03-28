'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight,
  BarChart3,
  Cloud,
  Server,
  Users,
  Globe,
  HeartPulse,
  CheckCircle2,
  Database,
  Code2,
  Zap,
  Shield
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'We develop framework to identify business goals and design recommended architecture with an implementation roadmap for data-driven decisions.',
      color: 'from-purple-500 to-purple-600',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Custom Dashboards']
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Services',
      description: 'Our AWS expertise helps making all data on AWS searchable, shareable, analyzable and derive meaningful insights from your data.',
      color: 'from-cyan-500 to-cyan-600',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Compliance']
    },
    {
      icon: Server,
      title: 'Server Hosting',
      description: 'High performing, managed web server hosting services for your website or applications with 99.9% uptime guarantee.',
      color: 'from-pink-500 to-pink-600',
      features: ['Managed Hosting', '24/7 Monitoring', 'Auto Scaling', 'DDoS Protection']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'We provide IT Consulting, Deployment, Implementation, Training and 24x7 Support for our clients across industries.',
      color: 'from-amber-500 to-orange-500',
      features: ['Strategy Planning', 'Digital Roadmap', 'Tech Assessment', 'Process Optimization']
    },
    {
      icon: Code2,
      title: 'Web & App Development',
      description: 'Custom web and mobile application development using modern technologies and best practices for optimal performance.',
      color: 'from-emerald-500 to-teal-500',
      features: ['React & Next.js', 'Mobile Apps', 'API Development', 'E-commerce Solutions']
    },
    {
      icon: HeartPulse,
      title: 'Healthcare Solutions',
      description: 'Specialized IT solutions for healthcare industry including patient management, telemedicine, and health analytics.',
      color: 'from-rose-500 to-red-500',
      features: ['Telemedicine', 'Patient Portal', 'Health Analytics', 'HIPAA Compliance']
    },
  ]

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We analyze your business needs and requirements' },
    { step: '02', title: 'Planning', desc: 'We create a detailed roadmap and strategy' },
    { step: '03', title: 'Development', desc: 'Our team builds your solution with best practices' },
    { step: '04', title: 'Deployment', desc: 'We launch and provide ongoing support' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Solutions That <span className="gradient-text">Drive Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We offer Consulting Services for Big Data Business Intelligence, Migration, Predictive Analytics Architecture, Development and Deployment Services on the complete continuum.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className="h-full card-3d service-card hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 section-title">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center p-8 rounded-3xl bg-card hover:shadow-xl transition-all duration-300 card-3d">
                  <div className="text-5xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              Technologies
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 section-title">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: Code2 },
              { name: 'Next.js', icon: Zap },
              { name: 'AWS', icon: Cloud },
              { name: 'Database', icon: Database },
              { name: 'Security', icon: Shield },
              { name: 'Analytics', icon: BarChart3 },
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 card-3d">
                <tech.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <span className="font-medium">{tech.name}</span>
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
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your requirements and create a tailored solution for your business.
              </p>
              <Link href="/contact">
                <button className="btn-3d bg-white text-purple-600 hover:bg-white/90 shadow-[0_4px_0_rgba(255,255,255,0.3),0_6px_20px_rgba(0,0,0,0.2)]">
                  Get a Quote
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
