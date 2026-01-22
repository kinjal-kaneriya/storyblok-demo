import { storyblokEditable } from "@storyblok/react/rsc"

export const Hero = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="container mx-auto px-4 text-center">
                <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full">
                    Exclusive Experience
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
                    {params.blok.headline}
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                    {params.blok.content}
                </p>
            </div>
        </section>
    )
}