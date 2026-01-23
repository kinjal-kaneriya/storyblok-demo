"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "All Tours", href: "/tours" },
    { name: "Contact", href: "/contact" },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm h-16"
                    : "bg-white/50 backdrop-blur-sm h-20"
                }`}
        >
            <nav className="container mx-auto px-4 h-full flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tighter text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform shadow-lg shadow-blue-200">
                        <span className="text-white text-base md:text-xl font-black">T</span>
                    </div>
                    <span>
                        TAIWAN<span className="text-slate-400">TOURS</span>
                    </span>
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold tracking-wide transition-all hover:text-blue-600 relative py-2 ${isActive ? "text-blue-600" : "text-slate-600"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                    <Link
                        href="/tours"
                        className="ml-4 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
                    >
                        Book Now
                    </Link>
                </div>

                <button
                    className="md:hidden p-2 text-slate-900 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-full h-0.5 bg-slate-900 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </button>
            </nav>

            <div
                className={`fixed inset-0 bg-white z-[60] md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 invisible"
                    }`}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex justify-between items-center mb-12">
                        <Link
                            href="/"
                            className="text-2xl font-black tracking-tighter text-blue-600"
                        >
                            TAIWAN<span className="text-slate-400">TOURS</span>
                        </Link>
                        <button
                            className="p-2 text-slate-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-3xl font-black tracking-tight ${isActive ? "text-blue-600" : "text-slate-900"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="mt-auto">
                        <Link
                            href="/tours"
                            className="block w-full text-center bg-blue-600 text-white py-5 rounded-2xl text-xl font-bold shadow-xl shadow-blue-100"
                        >
                            Explore All Tours
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
