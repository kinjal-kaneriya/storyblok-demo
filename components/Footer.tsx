import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link
                            href="/"
                            className="text-2xl font-black tracking-tighter text-white hover:text-blue-400 transition-colors flex items-center gap-2 mb-6"
                        >
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform -rotate-6">
                                <span className="text-white text-base font-black">T</span>
                            </div>
                            <span>
                                TAIWAN<span className="text-slate-500">TOURS</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Discover the hidden gems of Taiwan through our curated walking and photography tours.
                            Experience culture, history, and beauty with local experts.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/" className="hover:text-blue-400 transition-colors text-sm">Home</Link>
                            </li>
                            <li>
                                <Link href="/tours" className="hover:text-blue-400 transition-colors text-sm">All Tours</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-400 transition-colors text-sm">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors text-sm">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Destinations</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm">Taipei</li>
                            <li className="text-sm">Jiufen</li>
                            <li className="text-sm">Kaohsiung</li>
                            <li className="text-sm">Taroko Gorge</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Contact Us</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Ready for your next adventure? Get in touch with us today.
                        </p>
                        <a
                            href="mailto:hello@taiwantours.demo"
                            className="inline-block py-2 px-6 rounded-lg bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-all border border-slate-700"
                        >
                            Email Support
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 font-medium">
                        © {new Date().getFullYear()} Taiwan Tours Demo. All rights reserved.
                    </p>
                    <div className="flex gap-6 items-center">
                        <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
