import { RecommendedTour } from "./RecommendedTour"
import { storyblokEditable } from "@storyblok/react"

export const RecommendedTours = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="container py-16 px-4 mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center">{params.blok.headline}</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                {params.blok.tours.map((tour: any) => (
                    <RecommendedTour key={tour.content._uid} story={tour} />
                ))}
            </div>
        </section>
    )
} 