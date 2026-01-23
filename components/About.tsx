import { storyblokEditable } from "@storyblok/react/rsc";

export const About = (params: any) => {
    return (
        <section
            {...storyblokEditable(params.blok)}
            className="py-32 overflow-hidden bg-white"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 mb-8 bg-blue-50 border border-blue-100 rounded-full">
                        <span className="text-xs font-black tracking-widest text-blue-600 uppercase">
                            Our Story
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-12 tracking-tighter">
                        {params.blok.headline || "About Taiwan Tours"}
                    </h1>

                    <div className="prose prose-slate prose-lg md:prose-xl max-w-none mx-auto
                        prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-xl prose-p:md:text-2xl prose-p:font-medium
                        prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
                        prose-strong:text-slate-900
                        prose-a:text-blue-600 hover:prose-a:text-blue-700"
                    >
                        <p>{params.blok.content}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">Authentic Experiences</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Deep cultural connections and local secrets.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20 mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">Expert Guides</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Professional photographers and history buffs.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-600/20 mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">Flexible Scheduling</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Tours designed to fit your travel plans.</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <a
                            href="/tours"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Explore Our Tours
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
