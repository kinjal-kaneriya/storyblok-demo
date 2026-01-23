import type { Metadata } from 'next'
import './globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider'
import { storyblokComponents } from '@/lib/storyblok'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

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
      revalidate: 3600,
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
        <link rel='preconnect' href='https://a.storyblok.com' />
      </head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
        suppressHydrationWarning
      >
        <StoryblokProvider isEnabled={isEnabled}>
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </StoryblokProvider>
      </body>
    </html>
  )
}
