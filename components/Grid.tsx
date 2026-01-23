import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Grid = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="py-32 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4 w-full">
                {(params.blok.headline || params.blok.description) && (
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        {params.blok.headline && (
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                                {params.blok.headline}
                            </h2>
                        )}
                        {params.blok.description && (
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                {params.blok.description}
                            </p>
                        )}
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full" />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {params.blok.items.map((blok: any) => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </div>
        </section>
    )
}

