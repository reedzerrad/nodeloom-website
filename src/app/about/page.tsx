import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About - NodeLoom',
  description: 'Learn about NodeLoom\'s mission to democratize AI workflow automation for every team.',
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05]">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

function TeamMember({ name, role, bio }: { name: string, role: string, bio: string }) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
        <span className="text-4xl font-bold text-white/50">{name.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <p className="text-cyan-400 mb-4">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a14] text-white">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our mission is to
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">democratize AI automation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We believe every team should be able to harness the power of AI without needing a PhD in machine learning or a team of data engineers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  NodeLoom was born from a simple observation: while AI models have become incredibly powerful, actually deploying them in production remains frustratingly complex.
                </p>
                <p>
                  Teams spend months building custom pipelines, wrestling with authentication, managing rate limits, and implementing guardrails. This complexity was holding back innovation.
                </p>
                <p>
                  We created NodeLoom to change that. By providing a visual interface for building AI workflows, combined with enterprise-grade security and observability, we&apos;re making it possible for any team to deploy AI agents in days, not months.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-b from-white/[0.08] to-transparent rounded-3xl border border-white/[0.08] p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">2024</div>
                    <div className="text-gray-400 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">34+</div>
                    <div className="text-gray-400 text-sm">Node Types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">10K+</div>
                    <div className="text-gray-400 text-sm">Workflows Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Simplicity"
              description="Complex problems deserve elegant solutions. We obsess over making the powerful feel simple."
            />
            <ValueCard
              icon={<svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Security First"
              description="Trust is earned. We build security into every layer, from guardrails to audit logs."
            />
            <ValueCard
              icon={<svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Customer Obsession"
              description="Every feature starts with a customer need. We build what matters, not what&apos;s trendy."
            />
            <ValueCard
              icon={<svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
              title="Continuous Innovation"
              description="AI moves fast. We ship weekly, iterate daily, and never stop improving."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Meet the Team</h2>
            <p className="text-xl text-gray-400">The people building the future of AI automation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <TeamMember
              name="Alex Chen"
              role="CEO & Co-founder"
              bio="Former engineering lead at Stripe. Built payment infrastructure used by millions of businesses worldwide."
            />
            <TeamMember
              name="Sarah Martinez"
              role="CTO & Co-founder"
              bio="PhD in Machine Learning from Stanford. Previously led AI research at a leading tech company."
            />
            <TeamMember
              name="Jordan Williams"
              role="Head of Product"
              bio="10+ years in product management. Previously built developer tools at GitHub and Vercel."
            />
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Join Our Team</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            We&apos;re always looking for talented people who are passionate about AI, developer tools, and building great products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-white">
              View Open Positions
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
