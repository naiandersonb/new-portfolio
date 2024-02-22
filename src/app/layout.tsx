import { Header } from '@/app/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from './components/Footer'
import './globals.css'

const inter = Inter({
  variable: '--inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Naianderson Bruno',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
