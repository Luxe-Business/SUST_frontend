import './globals.css'
import { i18n } from '@/i18n.config'
import Header from './components/header'
import { Inter } from 'next/font/google'

import Footer from './components/Footer'
import { Providers } from './providers'
import HeroWraper from './components/HeroWraper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SUST',
  description: 'SUST'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }) {
  const isArabic = params.lang === 'ar'
  const direction = isArabic ? 'rtl' : 'ltr'

  return (
    <html lang={params.lang} dir={params.lang == 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>
          <section className='py-6'>
            <HeroWraper lang={params.lang} />
            <div className='py-20'>
              <Providers>{children}</Providers>
            </div>
          </section>
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}

// app/layout.tsx
