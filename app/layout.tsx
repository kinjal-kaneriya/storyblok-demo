import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider'
import { Page } from '@/components/Page'
import { Tour } from '@/components/Tour'
import { Hero } from '@/components/Hero'
import { Grid } from '@/components/Grid'
import { Feature } from '@/components/Feature'
import { Testimonial } from '@/components/Testimonial'
import { RecommendedTours } from '@/components/RecommendedTours'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

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
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isEnabled } = await draftMode()

  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
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
