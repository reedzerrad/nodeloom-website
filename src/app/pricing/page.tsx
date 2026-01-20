import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing - NodeLoom',
  description: 'Simple, transparent pricing for NodeLoom. Start free, scale as you grow.',
}

function PricingCard({ tier, price, period, description, features, highlighted, cta }: {
  tier: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}) {
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
          <span className="text-5xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-500">/{period}</span>}
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.05]">
      <h4 className="text-lg font-semibold text-white mb-3">{question}</h4>
      <p className="text-gray-400 leading-relaxed">{answer}</p>
    </div>
  )
}

export default function PricingPage() {
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
            Simple, transparent
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              tier="Starter"
              price="$0"
              period="month"
              description="Perfect for individuals and small projects"
              features={[
                '5 workflows',
                '1,000 executions/month',
                '3 AI providers (OpenAI, Anthropic, Gemini)',
                'Basic node types',
                'Community support',
                'Basic analytics',
                '7-day execution history',
              ]}
              cta="Get Started Free"
            />
            <PricingCard
              tier="Pro"
              price="$99"
              period="month"
              description="For growing teams and production workloads"
              features={[
                'Unlimited workflows',
                '50,000 executions/month',
                'All AI providers including Azure',
                'All 34+ node types',
                'Priority email support',
                'Advanced analytics & monitoring',
                '90-day execution history',
                'Team collaboration (up to 10)',
                'Webhook & API access',
              ]}
              highlighted={true}
              cta="Start 14-Day Free Trial"
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              description="For large organizations with custom needs"
              features={[
                'Unlimited everything',
                'Custom execution limits',
                'SSO & SAML integration',
                'Dedicated account manager',
                'SLA guarantees (99.9% uptime)',
                'Unlimited execution history',
                'Unlimited team members',
                'On-premise deployment option',
                'Custom integrations',
                'Compliance & security review',
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Workflows', starter: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Executions/month', starter: '1,000', pro: '50,000', enterprise: 'Custom' },
                  { feature: 'AI Providers', starter: '3', pro: 'All', enterprise: 'All + Custom' },
                  { feature: 'Node Types', starter: 'Basic', pro: 'All 34+', enterprise: 'All + Custom' },
                  { feature: 'Team Members', starter: '1', pro: '10', enterprise: 'Unlimited' },
                  { feature: 'Execution History', starter: '7 days', pro: '90 days', enterprise: 'Unlimited' },
                  { feature: 'API Access', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'SSO/SAML', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'SLA', starter: '—', pro: '—', enterprise: '99.9%' },
                  { feature: 'Support', starter: 'Community', pro: 'Priority Email', enterprise: 'Dedicated' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.starter}</td>
                    <td className="text-center py-4 px-4 text-gray-300">{row.pro}</td>
                    <td className="text-center py-4 px-4 text-gray-300">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FAQItem
              question="Can I change plans anytime?"
              answer="Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change takes effect at the next billing cycle."
            />
            <FAQItem
              question="What happens if I exceed my execution limit?"
              answer="We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional executions. We never stop your workflows without warning."
            />
            <FAQItem
              question="Do you offer annual billing?"
              answer="Yes! Annual billing saves you 20% compared to monthly billing. Contact sales for enterprise annual contracts with additional discounts."
            />
            <FAQItem
              question="Is there a free trial for Pro?"
              answer="Absolutely! Start with a 14-day free trial of Pro with full access to all features. No credit card required to start."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for enterprise customers."
            />
            <FAQItem
              question="Can I get a refund?"
              answer="We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of teams building AI workflows with NodeLoom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-white">
              Start Free Trial
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              Contact Sales
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
