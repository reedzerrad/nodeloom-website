import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - NodeLoom',
  description: 'Insights, tutorials, and updates from the NodeLoom team on AI workflow automation.',
}

const blogPosts = [
  {
    slug: 'introducing-nodeloom',
    title: 'Introducing NodeLoom: AI Workflow Automation for Everyone',
    excerpt: 'Today we\'re excited to announce NodeLoom, a new way to build, deploy, and operate AI agents visually. Learn about our vision and what makes NodeLoom different.',
    author: 'Alex Chen',
    date: 'January 15, 2024',
    category: 'Announcements',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'building-secure-ai-workflows',
    title: 'Building Secure AI Workflows: A Complete Guide to Guardrails',
    excerpt: 'AI security is no longer optional. Learn how to implement prompt injection detection, PII redaction, and content filtering in your workflows.',
    author: 'Sarah Martinez',
    date: 'January 10, 2024',
    category: 'Security',
    readTime: '8 min read',
  },
  {
    slug: 'multi-provider-ai-strategy',
    title: 'Why You Need a Multi-Provider AI Strategy',
    excerpt: 'Don\'t put all your eggs in one basket. Here\'s how to leverage multiple AI providers to maximize performance and minimize risk.',
    author: 'Jordan Williams',
    date: 'January 5, 2024',
    category: 'Best Practices',
    readTime: '6 min read',
  },
  {
    slug: 'workflow-versioning-best-practices',
    title: 'Workflow Versioning: Best Practices for Production AI',
    excerpt: 'Version control isn\'t just for code. Learn how to manage workflow versions, roll back changes, and A/B test different approaches.',
    author: 'Alex Chen',
    date: 'December 28, 2023',
    category: 'Engineering',
    readTime: '7 min read',
  },
  {
    slug: 'sentiment-analysis-at-scale',
    title: 'Sentiment Analysis at Scale: From Prototype to Production',
    excerpt: 'A deep dive into building production-ready sentiment analysis workflows that can process millions of messages per day.',
    author: 'Sarah Martinez',
    date: 'December 20, 2023',
    category: 'Tutorials',
    readTime: '10 min read',
  },
  {
    slug: 'rbac-for-ai-teams',
    title: 'RBAC for AI Teams: Managing Access in Enterprise Workflows',
    excerpt: 'Role-based access control is essential for enterprise AI. Here\'s how to set up permissions that balance security with productivity.',
    author: 'Jordan Williams',
    date: 'December 15, 2023',
    category: 'Enterprise',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Announcements', 'Security', 'Best Practices', 'Engineering', 'Tutorials', 'Enterprise']

function BlogCard({ post, featured = false }: { post: typeof blogPosts[0], featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`group block ${featured ? 'md:col-span-2' : ''}`}>
      <article className={`h-full p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 ${featured ? 'md:flex md:gap-8' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''} mb-6 ${featured ? 'md:mb-0' : ''}`}>
          <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>
        <div className={featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
              <span className="text-xs font-bold text-white">{post.author.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div>
              <p className="text-sm text-white">{post.author}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
            NodeLoom
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and updates on AI workflow automation from the NodeLoom team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="relative px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  i === 0
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <BlogCard post={featuredPost} featured />
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <BlogCard key={i} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to our newsletter</h2>
          <p className="text-gray-400 mb-8">Get the latest updates on AI workflow automation delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
