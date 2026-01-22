import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Page = (params: any) => {
    return (
        <main {...storyblokEditable(params.blok)}>
            {params.blok.blocks.map((blok: any) => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
        </main>
    )
};