"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react";

export const ContactForm = (params: any) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section
            {...storyblokEditable(params.blok)}
            className="py-24 bg-white"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white flex flex-col md:flex-row">
                    <div className="md:w-2/5 bg-slate-900 p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-black tracking-tighter mb-6">
                                {params.blok.headline || "Get in Touch"}
                            </h2>
                            <p className="text-slate-400 font-medium leading-relaxed mb-12">
                                Have questions about our tours? Our team is here to help you plan your perfect Taiwan adventure.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="font-bold">hello@taiwantours.demo</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Our Office</p>
                                        <p className="font-bold">Taipei, Taiwan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <p className="text-sm font-medium text-slate-500">Available 24/7 for emergency support during your tours.</p>
                        </div>
                    </div>

                    <div className="md:w-3/5 p-12 bg-white relative">
                        {isSubmitted && (
                            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-r-[3rem]">
                                <div className="text-center p-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                                        {params.blok.success_message || "Message Sent!"}
                                    </h3>
                                    <p className="text-slate-600 font-medium">We'll get back to you soon.</p>
                                </div>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium appearance-none">
                                    <option>Booking Inquiry</option>
                                    <option>Custom Tour Request</option>
                                    <option>General Question</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your travel plans..."
                                    required
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 px-8 bg-blue-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                {params.blok.button || "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
