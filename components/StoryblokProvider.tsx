"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import { storyblokComponents } from "./storyblok";

interface StoryblokProviderProps extends PropsWithChildren {
    isEnabled: boolean;
}

export const StoryblokProvider = ({ children, isEnabled }: StoryblokProviderProps) => {
    // Only initialize the bridge and components locally when draft mode is enabled
    if (isEnabled) {
        storyblokInit({
            components: storyblokComponents,
            enableFallbackComponent: true,
        });
    }

    return <>{children}</>
}