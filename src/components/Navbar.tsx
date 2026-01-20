'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
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

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a14]/95 backdrop-blur-xl border-b border-white/5 py-6 px-6">
          <div className="flex flex-col gap-4">
            <Link href="/features" className="text-gray-400 hover:text-white transition-colors py-2">Features</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors py-2">Pricing</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors py-2">About</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors py-2">Blog</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
