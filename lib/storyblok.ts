import { Page } from '@/components/Page'
import { Tour } from '@/components/Tour'
import { Hero } from '@/components/Hero'
import { Grid } from '@/components/Grid'
import { Feature } from '@/components/Feature'
import { Testimonial } from '@/components/Testimonial'
import { RecommendedTours } from '@/components/RecommendedTours'
import { About } from '@/components/About'
import { ContactForm } from '@/components/ContactForm'
import dynamic from 'next/dynamic'

export const storyblokComponents = {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
    about: About,
    contact_form: ContactForm,
    contact: ContactForm,
}

export const dynamicStoryblokComponents = {
    tour: dynamic(() => import('@/components/Tour').then((mod) => mod.Tour)),
    page: dynamic(() => import('@/components/Page').then((mod) => mod.Page)),
    hero: dynamic(() => import('@/components/Hero').then((mod) => mod.Hero)),
    grid: dynamic(() => import('@/components/Grid').then((mod) => mod.Grid)),
    feature: dynamic(() => import('@/components/Feature').then((mod) => mod.Feature)),
    testimonial: dynamic(() => import('@/components/Testimonial').then((mod) => mod.Testimonial)),
    recommended_tours: dynamic(() => import('@/components/RecommendedTours').then((mod) => mod.RecommendedTours)),
    about: dynamic(() => import('@/components/About').then((mod) => mod.About)),
    contact_form: dynamic(() => import('@/components/ContactForm').then((mod) => mod.ContactForm)),
    contact: dynamic(() => import('@/components/ContactForm').then((mod) => mod.ContactForm)),
}
