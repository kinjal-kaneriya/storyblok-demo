"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import dynamic from "next/dynamic";

// Use dynamic imports for client-side components to reduce bundle size and TBT
const storyblokComponents = {
    tour: dynamic(() => import("./Tour").then(mod => mod.Tour)),
    page: dynamic(() => import("./Page").then(mod => mod.Page)),
    hero: dynamic(() => import("./Hero").then(mod => mod.Hero)),
    grid: dynamic(() => import("./Grid").then(mod => mod.Grid)),
    feature: dynamic(() => import("./Feature").then(mod => mod.Feature)),
    testimonial: dynamic(() => import("./Testimonial").then(mod => mod.Testimonial)),
    recommended_tours: dynamic(() => import("./RecommendedTours").then(mod => mod.RecommendedTours)),
};

export default function StoryblokBridge() {
    storyblokInit({
        accessToken: process.env.STORYBLOK_TOKEN,
        use: [apiPlugin],
        components: storyblokComponents as any,
        enableFallbackComponent: true,
    });

    return null;
}
