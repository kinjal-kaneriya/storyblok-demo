import { Page } from '@/components/Page'
import { Tour } from '@/components/Tour'
import { Hero } from '@/components/Hero'
import { Grid } from '@/components/Grid'
import { Feature } from '@/components/Feature'
import { Testimonial } from '@/components/Testimonial'
import { RecommendedTours } from '@/components/RecommendedTours'
import dynamic from 'next/dynamic'

// Static mapping for Server-Side Rendering (RSC)
export const storyblokComponents = {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
}

// Dynamic mapping for the Storyblok Bridge (Client-side)
// This ensures that Storyblok-related JS is only loaded when needed, keeping TBT low.
export const dynamicStoryblokComponents = {
    tour: dynamic(() => import('@/components/Tour').then((mod) => mod.Tour)),
    page: dynamic(() => import('@/components/Page').then((mod) => mod.Page)),
    hero: dynamic(() => import('@/components/Hero').then((mod) => mod.Hero)),
    grid: dynamic(() => import('@/components/Grid').then((mod) => mod.Grid)),
    feature: dynamic(() => import('@/components/Feature').then((mod) => mod.Feature)),
    testimonial: dynamic(() => import('@/components/Testimonial').then((mod) => mod.Testimonial)),
    recommended_tours: dynamic(() => import('@/components/RecommendedTours').then((mod) => mod.RecommendedTours)),
}
