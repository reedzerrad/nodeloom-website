import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'NodeLoom - AI Workflow Automation Platform',
  description: 'Weave powerful AI workflows with intelligent nodes. Build, deploy, and operate AI agents visually using workflows that combine AI reasoning, data access, and real-world actions.',
  keywords: ['AI workflow', 'workflow automation', 'AI agents', 'no-code AI', 'enterprise AI'],
  authors: [{ name: 'NodeLoom' }],
  openGraph: {
    title: 'NodeLoom - AI Workflow Automation Platform',
    description: 'Weave powerful AI workflows with intelligent nodes.',
    url: 'https://nodeloom.io',
    siteName: 'NodeLoom',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NodeLoom - AI Workflow Automation',
    description: 'Weave powerful AI workflows with intelligent nodes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
