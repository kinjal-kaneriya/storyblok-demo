import { storyblokEditable } from "@storyblok/react"

export const Feature = (params: any) => {
    return (
        <div
            {...storyblokEditable(params.blok)}
            className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-blue-600 transition-all duration-500" />

            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-500">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>

            <h3 className="font-black text-2xl text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                {params.blok.headline}
            </h3>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">
                {params.blok.content}
            </p>
        </div>
    )
}
