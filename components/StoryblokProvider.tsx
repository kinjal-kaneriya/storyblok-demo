"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { RecommendedTours } from "./RecommendedTours";

interface StoryblokProviderProps extends PropsWithChildren {
    isEnabled: boolean;
}

export const StoryblokProvider = ({ children, isEnabled }: StoryblokProviderProps) => {
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