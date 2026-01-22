import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Grid = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="bg-blue-100 py-16">
            <div className="container mx-auto px-4 w-full">
                <h2 className="text-3xl md:text-4xl font-bold">{params.blok.headline}</h2>
                <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
                    {params.blok.items.map((blok: any) => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </div>
        </section>
    )
}
