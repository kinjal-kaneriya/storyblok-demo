import { renderRichText } from "@storyblok/react/rsc"
import { storyblokEditable } from "@storyblok/react"
import Image from "next/image"

export const Tour = (props: any) => {
    return (
        <main
            {...storyblokEditable(props.blok)}
            className="container mx-auto px-4 w-full pt-32 pb-16">
            <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>
            <div className="relative aspect-video mt-12 overflow-hidden rounded-lg">
                <Image
                    className="object-cover"
                    src={props.blok.main_image.filename}
                    alt={props.blok.main_image.alt || props.blok.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
            </div>
            <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">{props.blok.introduction}</p>
            <div
                className="prose md:prose-lg max-w-none mt-16"
                dangerouslySetInnerHTML={{
                    __html: renderRichText(props.blok.body) as any,
                }}
            ></div>
        </main>
    )
} 