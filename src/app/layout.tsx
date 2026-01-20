import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BidGenius - AI Response System',
  description: 'AI-powered bid responses with tone customization and team collaboration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  )
}
