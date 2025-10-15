import type { Metadata } from 'next'
import './globals.css'
import '@/lib/amplify'

export const metadata: Metadata = {
  title: 'Next.js with Amplify',
  description: 'Next.js application with AWS Amplify integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}