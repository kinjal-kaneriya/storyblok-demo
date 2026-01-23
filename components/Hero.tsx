import { storyblokEditable } from "@storyblok/react/rsc"
import Image from "next/image"

export const Hero = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
            {/* Rich Background Elements */}
            <div className="absolute inset-0 bg-slate-50 -z-30" />

            {/* Decorative background blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-20 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] -z-20" />

            {params.blok.background_image?.filename && (
                <div className="absolute inset-0 -z-10 opacity-10">
                    <Image
                        src={params.blok.background_image.filename}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
                </div>
            )}

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 mb-8 bg-blue-50 border border-blue-100 rounded-full shadow-sm shadow-blue-900/5 animate-bounce-subtle">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                        <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
                            Adventure Awaits
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                        {params.blok.headline}
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-medium mb-12">
                        {params.blok.content}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="/tours"
                            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Explore Tours
                        </a>
                        <a
                            href="/about"
                            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-2xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    )
}
