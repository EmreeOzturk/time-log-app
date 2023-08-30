import Header from '@/components/layout/header'
import './global.css'
import type { Metadata } from 'next'
import { Anuphan } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
const inter = Anuphan({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Time Logger',
  description: 'Time Logger is a simple time tracking app built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-4xl mx-auto p-4 min-h-screen">
          <Header />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  )
}
