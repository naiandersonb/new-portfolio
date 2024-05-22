import { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { IBM_Plex_Mono, Roboto } from 'next/font/google'
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

const roboto = Roboto({
  variable: '--roboto',
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--ibm-plex-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
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
      <body
        className={`${roboto.variable} ${ibmPlexMono.variable} scroll-smooth`}
      >
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
