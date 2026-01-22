import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import Image from "next/image";

export const RecommendedTour = (props: any) => {
    return (
        <div
            {...storyblokEditable(props.story.content)}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 h-full flex flex-col"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    src={props.story.content.main_image.filename}
                    alt={props.story.content.main_image.alt || props.story.content.name}
                    fill
                    priority={props.priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute top-4 left-4">
                    <span className="py-1 px-3 text-[10px] font-bold tracking-widest text-white uppercase bg-blue-600/90 backdrop-blur-sm rounded-lg">
                        {props.story.content.location}
                    </span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col gap-2 mb-6 flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {props.story.content.name}
                    </h3>
                    <p className="text-2xl font-black text-slate-900">
                        {Number(props.story.content.price).toLocaleString("en-US", {
                            style: "currency",
                            currency: "TWD",
                            minimumFractionDigits: 0,
                        })}
                    </p>
                </div>
                <Link
                    className="inline-flex items-center justify-center w-full py-3 px-6 font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20"
                    href={`/${props.story.full_slug}`}
                >
                    View Tour Details
                </Link>
            </div>
        </div>
    )
};
