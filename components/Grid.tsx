import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Grid = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="py-24 bg-white"
        >
            <div className="container mx-auto px-4 w-full">
                {params.blok.headline && (
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter text-center">
                        {params.blok.headline}
                    </h2>
                )}
                <div className="grid md:grid-cols-3 gap-8">
                    {params.blok.items.map((blok: any) => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </div>
        </section>
    )
}
