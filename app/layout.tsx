import type { Metadata } from 'next'
import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider'
import { storyblokComponents } from '@/components/storyblok'
import Link from 'next/link'

// Use a system font stack to avoid build errors related to Google Fonts fetching in restricted environments
const inter = { className: 'font-sans' }

export const metadata: Metadata = {
  title: 'Storyblok Demo - Discover Taiwan Tours',
  description:
    'Explore the best walking and photography tours in Taiwan with our Storyblok-powered demo application.',
}

import { draftMode } from 'next/headers'

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    next: {
      revalidate: 3600, // Revalidate every hour
      tags: ['storyblok'],
    },
  })
}

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
  components: storyblokComponents,
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isEnabled } = await draftMode()

  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://a.storyblok.com" />
      </head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
        suppressHydrationWarning
      >
        <StoryblokProvider isEnabled={isEnabled}>
          <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200'>
            <nav className='container mx-auto px-4 h-20 flex items-center justify-between'>
              <Link
                href='/'
                className='text-2xl font-black tracking-tighter text-blue-600 hover:text-blue-700 transition-colors'
              >
                TAIWAN<span className='text-slate-400'>TOURS</span>
              </Link>
              <div className='flex gap-8 font-medium'>
                <Link
                  href='/'
                  className='hover:text-blue-600 transition-colors'
                >
                  Home
                </Link>
                <Link
                  href='/tours'
                  className='hover:text-blue-600 transition-colors'
                >
                  All Tours
                </Link>
              </div>
            </nav>
          </header>
          <main className='min-h-screen'>{children}</main>
          <footer className='bg-slate-900 text-slate-400 py-12 mt-20'>
            <div className='container mx-auto px-4 text-center'>
              <p className='text-sm'>
                © {new Date().getFullYear()} Taiwan Tours Demo. Built with
                Next.js and Storyblok.
              </p>
            </div>
          </footer>
        </StoryblokProvider>
      </body>
    </html>
  )
}
