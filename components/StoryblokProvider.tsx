"use client";
import type { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { storyblokInit } from "@storyblok/react/rsc";

// Dynamically import components to reduce main bundle size
const Tour = dynamic(() => import("./Tour").then(mod => mod.Tour));
const Page = dynamic(() => import("./Page").then(mod => mod.Page));
const Hero = dynamic(() => import("./Hero").then(mod => mod.Hero));
const Grid = dynamic(() => import("./Grid").then(mod => mod.Grid));
const Feature = dynamic(() => import("./Feature").then(mod => mod.Feature));
const Testimonial = dynamic(() => import("./Testimonial").then(mod => mod.Testimonial));
const RecommendedTours = dynamic(() => import("./RecommendedTours").then(mod => mod.RecommendedTours));

interface StoryblokProviderProps extends PropsWithChildren {
    isEnabled: boolean;
}

export const StoryblokProvider = ({ children, isEnabled }: StoryblokProviderProps) => {
    // Only initialize the bridge and components locally when draft mode is enabled
    if (isEnabled) {
        storyblokInit({
            components: {
                tour: Tour,
                page: Page,
                hero: Hero,
                grid: Grid,
                feature: Feature,
                testimonial: Testimonial,
                recommended_tours: RecommendedTours,
            },
            enableFallbackComponent: true,
        });
    }

    return <>{children}</>
}