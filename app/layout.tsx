import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { Page } from "@/components/Page";
import { Tour } from "@/components/Tour";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Feature } from "@/components/Feature";
import { Testimonial } from "@/components/Testimonial";
import { RecommendedTours } from "@/components/RecommendedTours";
import Link from "next/link";

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
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
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-50">
        <StoryblokProvider>
          <header>
            <nav className="container mx-auto px-4 w-full py-8 flex justify-between">
              <Link href="/">Home</Link>
              <Link href="/tours">Tours</Link>
            </nav>
          </header>
          {children}
        </StoryblokProvider>
      </body>
    </html>
  );
}
