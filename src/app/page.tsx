'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Animated Node Component for Hero
function AnimatedNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlowPurple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Thread connections */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          <path d="M150,200 Q300,150 400,250" stroke="url(#threadGradient)" strokeWidth="2" fill="none" className="animate-draw" />
          <path d="M400,250 Q500,350 650,280" stroke="url(#threadGradient)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '0.5s' }} />
          <path d="M400,250 Q350,400 500,450" stroke="url(#threadGradient)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '1s' }} />
          <path d="M650,280 Q700,380 600,450" stroke="url(#threadGradient)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '1.5s' }} />
          <path d="M150,200 Q100,350 200,400" stroke="url(#threadGradient)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '0.8s' }} />
          <path d="M200,400 Q350,380 500,450" stroke="url(#threadGradient)" strokeWidth="2" fill="none" className="animate-draw" style={{ animationDelay: '1.2s' }} />
        </g>

        {/* Nodes */}
        <g filter="url(#glow)">
          {/* Node 1 - Trigger */}
          <g className="animate-float" style={{ animationDelay: '0s' }}>
            <circle cx="150" cy="200" r="25" fill="url(#nodeGlow)" />
            <circle cx="150" cy="200" r="12" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
            <polygon points="145,195 145,205 155,200" fill="#22d3ee" />
          </g>

          {/* Node 2 - AI */}
          <g className="animate-float" style={{ animationDelay: '0.5s' }}>
            <circle cx="400" cy="250" r="30" fill="url(#nodeGlowPurple)" />
            <circle cx="400" cy="250" r="15" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
            <text x="400" y="254" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">AI</text>
          </g>

          {/* Node 3 - Data */}
          <g className="animate-float" style={{ animationDelay: '1s' }}>
            <circle cx="650" cy="280" r="22" fill="url(#nodeGlow)" />
            <circle cx="650" cy="280" r="11" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
            <rect x="644" y="274" width="12" height="12" fill="none" stroke="#22d3ee" strokeWidth="1.5" rx="2" />
          </g>

          {/* Node 4 - Action */}
          <g className="animate-float" style={{ animationDelay: '1.5s' }}>
            <circle cx="500" cy="450" r="20" fill="url(#nodeGlowPurple)" />
            <circle cx="500" cy="450" r="10" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
            <path d="M495,450 L500,445 L505,450 L500,455 Z" fill="#8b5cf6" />
          </g>

          {/* Node 5 - Output */}
          <g className="animate-float" style={{ animationDelay: '2s' }}>
            <circle cx="200" cy="400" r="18" fill="url(#nodeGlow)" />
            <circle cx="200" cy="400" r="9" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
            <circle cx="200" cy="400" r="4" fill="#22d3ee" />
          </g>

          {/* Node 6 - Conditional */}
          <g className="animate-float" style={{ animationDelay: '0.8s' }}>
            <circle cx="600" cy="450" r="18" fill="url(#nodeGlowPurple)" />
            <circle cx="600" cy="450" r="9" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2" />
            <path d="M595,450 L600,444 L605,450 L600,456 Z" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <div
      className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Testimonial Card
function TestimonialCard({ quote, author, role, company, delay }: { quote: string, author: string, role: string, company: string, delay: number }) {
  return (
    <div
      className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-br-full" />
      <svg className="w-10 h-10 text-cyan-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="text-white font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}, {company}</p>
      </div>
    </div>
  )
}

// Pricing Card
function PricingCard({ tier, price, description, features, highlighted, cta }: { tier: string, price: string, description: string, features: string[], highlighted?: boolean, cta: string }) {
  return (
    <div className={`relative p-8 rounded-2xl ${highlighted ? 'bg-gradient-to-b from-cyan-500/20 to-purple-500/10 border-cyan-500/50' : 'bg-white/[0.03] border-white/[0.08]'} border transition-all duration-300 hover:transform hover:scale-[1.02]`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold text-white">
          Most Popular
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{tier}</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${highlighted ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        {cta}
      </button>
    </div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.svg" alt="NodeLoom" width={40} height={40} />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">NodeLoom</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">Sign In</button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-32">
        <AnimatedNodes />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-gray-400">Now supporting Claude, GPT-4, and Gemini</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              <span className="block">Weave AI workflows</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">that safely scale</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Build, deploy, and operate AI agents visually. Connect intelligent nodes on an infinite canvas to create workflows that combine AI reasoning with real-world actions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2">
                Start Building Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Logos Section */}
      <section className="relative py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-12 uppercase tracking-widest text-sm">Trusted by innovative engineering teams</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {['Acme Corp', 'TechFlow', 'DataSync', 'CloudNine', 'AIForge', 'ScaleUp'].map((company, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From idea to production in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">minutes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three simple steps to deploy AI workflows that scale with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50" />

            {[
              { step: '01', title: 'Design', description: 'Drag and drop nodes onto an infinite canvas. Connect AI models, data sources, and actions visually.', icon: '✏️' },
              { step: '02', title: 'Connect', description: 'Integrate with 50+ services. Use pre-built connectors for databases, APIs, and cloud services.', icon: '🔗' },
              { step: '03', title: 'Deploy', description: 'Launch workflows with one click. Monitor executions in real-time with built-in observability.', icon: '🚀' },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl relative z-10">
                  {item.icon}
                </div>
                <div className="text-cyan-400 font-mono text-sm mb-2">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Everything you need to build <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI-powered</span> workflows
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade features designed for teams that demand reliability, security, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              delay={0}
              icon={<svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
              title="Visual Workflow Builder"
              description="Drag-and-drop interface with an infinite canvas. Connect 34+ node types to build complex AI workflows without writing code."
            />
            <FeatureCard
              delay={100}
              icon={<svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Multi-Provider AI"
              description="Switch between OpenAI, Anthropic, Google Gemini, and Azure with a single click. Use the best model for each task."
            />
            <FeatureCard
              delay={200}
              icon={<svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Enterprise Security"
              description="RBAC, guardrails, prompt injection detection, PII redaction, and comprehensive audit logs. SOC 2 compliant."
            />
            <FeatureCard
              delay={300}
              icon={<svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Real-Time Execution"
              description="Watch workflows execute node-by-node. Debug issues with full input/output visibility and step-by-step traces."
            />
            <FeatureCard
              delay={400}
              icon={<svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              title="Developer-Friendly"
              description="RESTful APIs, webhook triggers, and SDK support. Embed workflows into your applications seamlessly."
            />
            <FeatureCard
              delay={500}
              icon={<svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
              title="Cloud Integrations"
              description="Native connectors for AWS, GCP, databases, Slack, email, and more. Build once, connect everywhere."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Loved by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">engineering teams</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See why teams choose NodeLoom for their AI automation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              delay={0}
              quote="NodeLoom cut our AI integration time from weeks to hours. The visual builder is intuitive, and the security features give us confidence to deploy in production."
              author="Sarah Chen"
              role="VP of Engineering"
              company="TechFlow"
            />
            <TestimonialCard
              delay={100}
              quote="We switched from building custom pipelines to NodeLoom and haven't looked back. The multi-provider AI support means we're never locked into one vendor."
              author="Marcus Rodriguez"
              role="Head of AI/ML"
              company="DataSync"
            />
            <TestimonialCard
              delay={200}
              quote="The guardrails and audit logging sold us. We needed enterprise-grade security for our AI workflows, and NodeLoom delivered exactly what we needed."
              author="Emily Watson"
              role="CTO"
              company="CloudNine"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple, transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              tier="Starter"
              price="$0"
              description="Perfect for trying out NodeLoom"
              features={[
                '5 workflows',
                '1,000 executions/month',
                '3 AI providers',
                'Community support',
                'Basic analytics',
              ]}
              cta="Start Free"
            />
            <PricingCard
              tier="Pro"
              price="$99"
              description="For growing teams and projects"
              features={[
                'Unlimited workflows',
                '50,000 executions/month',
                'All AI providers',
                'Priority support',
                'Advanced analytics',
                'Team collaboration',
              ]}
              highlighted={true}
              cta="Start Free Trial"
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              description="For large-scale deployments"
              features={[
                'Unlimited everything',
                'Custom execution limits',
                'SSO & SAML',
                'Dedicated support',
                'SLA guarantees',
                'On-premise option',
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
            <div className="relative bg-gradient-to-b from-white/[0.08] to-transparent rounded-3xl border border-white/[0.08] p-12 sm:p-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to weave your first workflow?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of engineers building AI-powered automations with NodeLoom. Start free, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2">
                  Get Started Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  Schedule a demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image src="/logo-icon.svg" alt="NodeLoom" width={36} height={36} />
                <span className="text-xl font-bold">NodeLoom</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Weave powerful AI workflows that safely scale. Build, deploy, and operate AI agents visually.
              </p>
              <div className="flex gap-4">
                {['twitter', 'github', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">
                    <span className="text-gray-400 capitalize text-xs">{social[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides', 'Templates', 'Community'] },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2024 NodeLoom. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes draw {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-draw {
          stroke-dasharray: 1000;
          animation: draw 3s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
