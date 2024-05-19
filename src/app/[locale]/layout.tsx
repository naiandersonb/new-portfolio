import { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { DM_Sans, Inter } from 'next/font/google'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const locales = ['en', 'de']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface LayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

const inter = Inter({
  variable: '--inter',
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  variable: '--dm-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Naianderson Bruno',
  description: 'Web developer',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSans.variable} scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Header />
            <main className="min-h-full mt-[80px] md:p-8 p-4 font-dmSans max-w-[1200px] w-full mx-auto">
              {children}

              <Footer />
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
