import { renderRichText } from "@storyblok/react/rsc"
import { storyblokEditable } from "@storyblok/react"
import Image from "next/image"

export const Tour = (props: any) => {
    return (
        <main
            {...storyblokEditable(props.blok)}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter text-center">
                    {props.blok.name}
                </h1>

                <div className="relative aspect-video mb-16 overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/10 border border-white/20">
                    <Image
                        className="object-cover"
                        src={props.blok.main_image.filename}
                        alt={props.blok.main_image.alt || props.blok.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                </div>

                <div className="max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed mb-12">
                        {props.blok.introduction}
                    </p>
                    <div
                        className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 prose-p:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:underline"
                        dangerouslySetInnerHTML={{
                            __html: renderRichText(props.blok.body) as any,
                        }}
                    ></div>
                </div>
            </div>
        </main>
    )
} 