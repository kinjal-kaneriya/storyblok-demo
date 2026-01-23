import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import Image from "next/image";

export const RecommendedTour = (props: any) => {
    return (
        <div
            {...storyblokEditable(props.story.content)}
            className="group bg-white rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-slate-100 h-full flex flex-col"
        >
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={props.story.content.main_image.filename}
                    alt={props.story.content.main_image.alt || props.story.content.name}
                    fill
                    priority={props.priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="py-1.5 px-4 text-[10px] font-black tracking-widest text-white uppercase bg-blue-600 rounded-full shadow-lg shadow-blue-600/20">
                        {props.story.content.location}
                    </span>
                    {props.story.content.duration && (
                        <span className="py-1.5 px-4 text-[10px] font-black tracking-widest text-slate-900 uppercase bg-white rounded-full shadow-lg shadow-black/5">
                            {props.story.content.duration}
                        </span>
                    )}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-8 flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight mb-2">
                        {props.story.content.name}
                    </h3>
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Starting from</p>
                        <div className="h-px bg-slate-100 flex-grow" />
                    </div>
                    <p className="text-3xl font-black text-slate-900 mt-2">
                        {Number(props.story.content.price).toLocaleString("en-US", {
                            style: "currency",
                            currency: "TWD",
                            minimumFractionDigits: 0,
                        })}
                    </p>
                </div>

                <Link
                    className="group/btn relative inline-flex items-center justify-center w-full py-4 px-8 font-black text-white bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20"
                    href={`/${props.story.full_slug}`}
                >
                    <span className="relative z-10">View Tour Details</span>
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    )
};

