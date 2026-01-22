import { storyblokEditable } from "@storyblok/react"

export const Feature = (params: any) => {
    return (
        <div
            {...storyblokEditable(params.blok)}
            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-5 h-5 bg-blue-600 rounded-sm" />
            </div>
            <h3 className="font-bold text-2xl text-slate-900 mb-4">{params.blok.headline}</h3>
            <p className="text-slate-600 leading-relaxed">{params.blok.content}</p>
        </div>
    )
}