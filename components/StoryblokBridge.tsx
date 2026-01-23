"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { dynamicStoryblokComponents } from "@/lib/storyblok";

export default function StoryblokBridge() {
    storyblokInit({
        accessToken: process.env.STORYBLOK_TOKEN,
        use: [apiPlugin],
        components: dynamicStoryblokComponents as any,
        enableFallbackComponent: true,
    });

    return null;
}
