import { StoryblokComponent } from "@storyblok/react";

export const Page = (params: any) => {
    console.log(params);
    return <main>
        {params.blok.blocks.map((blok: any) => (
            <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
    </main>
};