import { RecommendedTour } from "./RecommendedTour"
import { storyblokEditable } from "@storyblok/react"

export const RecommendedTours = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="py-24 bg-slate-50"
        >
            <div className="container mx-auto px-4 w-full">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter text-center">
                    {params.blok.headline}
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {params.blok.tours.map((tour: any, index: number) => (
                        <div key={tour.content._uid} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] max-w-[400px]">
                            <RecommendedTour story={tour} priority={index === 0} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 