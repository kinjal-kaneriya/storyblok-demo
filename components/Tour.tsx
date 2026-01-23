import { renderRichText } from "@storyblok/react/rsc"
import { storyblokEditable } from "@storyblok/react"
import Image from "next/image"

export const Tour = (props: any) => {
    return (
        <main
            {...storyblokEditable(props.blok)}
            className="pb-24 pt-20"
        >
            {/* Tour Hero Section */}
            <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
                <Image
                    className="object-cover"
                    src={props.blok.main_image.filename}
                    alt={props.blok.main_image.alt || props.blok.name}
                    fill
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full pb-12 md:pb-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <nav className="flex items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest mb-6">
                                <a href="/tours" className="hover:text-white transition-colors">Tours</a>
                                <span>/</span>
                                <span className="text-blue-400">{props.blok.location}</span>
                            </nav>
                            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                                {props.blok.name}
                            </h1>

                            <div className="flex flex-wrap gap-4 md:gap-8">
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-2xl">
                                    <div className="text-blue-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Duration</p>
                                        <p className="text-white font-bold">{props.blok.duration || 'Full Day'}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-2xl">
                                    <div className="text-blue-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Location</p>
                                        <p className="text-white font-bold">{props.blok.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 -mt-12 md:-mt-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Details */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-900/5 border border-slate-100 mb-12">
                            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-blue-600 pl-8">
                                {props.blok.introduction}
                            </p>

                            <div
                                className="prose prose-slate prose-lg md:prose-xl max-w-none 
                                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 
                                    prose-p:text-slate-600 prose-p:leading-loose
                                    prose-strong:text-slate-900 
                                    prose-a:text-blue-600 hover:prose-a:text-blue-700
                                    prose-img:rounded-3xl prose-img:shadow-xl"
                                dangerouslySetInnerHTML={{
                                    __html: renderRichText(props.blok.body) as any,
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Right Column: Booking Card */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-900/20">
                                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Starting from</p>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black tracking-tighter">
                                        {Number(props.blok.price).toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "TWD",
                                            minimumFractionDigits: 0,
                                        })}
                                    </span>
                                    <span className="text-slate-400 font-medium">/ person</span>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-slate-200">Free Cancellation</span>
                                    </div>
                                    <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-slate-200">Local Expert Guide</span>
                                    </div>
                                    <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-slate-200">Instant Confirmation</span>
                                    </div>
                                </div>

                                <button className="w-full py-5 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Book This Tour
                                </button>

                                <p className="text-center text-slate-500 text-xs mt-6 font-bold tracking-wide uppercase">
                                    Secure & Encrypted Payment
                                </p>
                            </div>

                            {/* Help box */}
                            <div className="mt-8 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                                <h4 className="text-slate-900 font-bold mb-2">Need help with booking?</h4>
                                <p className="text-slate-600 text-sm mb-4">Our travel experts are available 24/7 to help you plan your perfect trip.</p>
                                <a href="/contact" className="text-blue-600 font-bold hover:underline">Contact Support →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 