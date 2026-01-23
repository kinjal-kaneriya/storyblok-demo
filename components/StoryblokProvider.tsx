"use client";
import type { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const StoryblokBridge = dynamic(() => import("./StoryblokBridge"), {
    ssr: false,
});

interface StoryblokProviderProps extends PropsWithChildren {
    isEnabled: boolean;
}

export const StoryblokProvider = ({ children, isEnabled }: StoryblokProviderProps) => {
    return (
        <>
            {isEnabled && <StoryblokBridge />}
            {children}
        </>
    );
}