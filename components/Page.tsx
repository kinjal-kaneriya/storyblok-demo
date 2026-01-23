import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Page = (params: any) => {
    const content = params.blok.body || params.blok.blocks || [];

    return (
        <main {...storyblokEditable(params.blok)} className="min-h-screen">
            {content.map((blok: any) => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
        </main>
    )
};