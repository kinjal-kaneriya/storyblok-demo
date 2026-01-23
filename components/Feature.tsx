import { storyblokEditable } from "@storyblok/react"

export const Feature = (params: any) => {
    return (
        <div
            {...storyblokEditable(params.blok)}
            className="p-8 text-center rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <h3 className="font-bold text-2xl text-slate-900 mb-4">{params.blok.headline}</h3>
            <p className="text-slate-600 leading-relaxed">{params.blok.content}</p>
        </div>
    )
}