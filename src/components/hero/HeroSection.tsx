// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useHeroSection } from "@/hooks/useHeroSection";
import HeroSkeleton from "@/components/layout/Skeleton/HeroSkeleton";
import FallbackImage from "../FallbackImage";

export default function HeroSection() {
    const { data, isLoading, error } = useHeroSection();

    // ✅ loading FIRST (no layout shift)
    if (isLoading) return <HeroSkeleton />;
    if (error || !data) return null;

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="space-y-10 text-center lg:text-left animate-fade-in">
                <div className="space-y-3">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">
                        {data.subtitle_en}
                    </h2>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium text-slate-50 leading-tight">
                        {data.title_en.split(" ")[0]}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400">
                            {data.title_en.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>
                </div>

                <div
                    className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
                    dangerouslySetInnerHTML={{ __html: data.description_en }}
                />

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                        href={data.button_url}
                        className="px-8 py-4 bg-blue-600 max-w-max text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 group"
                    >
                        {data.button_text_en}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-slate-800 border max-w-max border-slate-700 text-slate-100 rounded-full text-sm font-medium hover:bg-slate-700 transition-all"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>

            {/* RIGHT */}
            <div className="relative mx-auto lg:ml-auto max-w-md">
                <div className="aspect-[4/5] h-[540px] w-[400px] relative rounded-2xl overflow-hidden">

                    <FallbackImage
                        src={data.profile_image}
                        alt={data.title_en}
                        className="object-cover h-[500px] w-[400px] "
                    />
                </div>

                <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50" />
            </div>
        </div>
    );
}
