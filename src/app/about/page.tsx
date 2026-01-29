'use client';

import React from 'react';
import Image from 'next/image';
import {
  Heart,
  Globe,
  Users,
  BookOpen,
  Award,
  Briefcase,
} from 'lucide-react';
import { useAboutMovement } from '@/hooks/useAboutMovement';

export default function About() {
  const { data, isLoading, error } = useAboutMovement();

  // ✅ loading FIRST (standard practice)
  if (isLoading) {
    return (
      <main className="min-h-screen pt-32 pb-24 px-6">
        <section className="grid md:grid-cols-2 gap-12 animate-pulse max-w-4xl mx-auto">
          <div className="aspect-[4/5] bg-slate-800 rounded-2xl" />
          <div className="space-y-4">
            <div className="h-8 w-1/3 bg-slate-700 rounded" />
            <div className="h-24 bg-slate-700 rounded" />
            <div className="h-24 bg-slate-700 rounded" />
          </div>
        </section>
      </main>
    );
  }

  if (error || !data?.results?.length) return null;

  const about = data.results[0];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-l from-slate-800/30 to-transparent -z-10" />

      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <header className="space-y-6 text-center max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 font-medium">
            About Me
          </h1>
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            {about.subtitle}
          </p>
        </header>

        {/* Bio Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slide-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-800 shadow-xl">
              <Image
                src={about.images?.[0]?.image}
                alt={about.title}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-50">
              {about.title}
            </h2>

            <div
              className="prose prose-slate prose-lg text-slate-300 font-light"
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <span className="block text-3xl font-bold text-blue-400 mb-1">
                  10+
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  Years Active
                </span>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <span className="block text-3xl font-bold text-orange-400 mb-1">
                  50+
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  Projects Led
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values & Focus */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-50">
                Core Values
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                { text: 'Service Above Self', icon: Users },
                { text: 'Integrity & Ethics', icon: Award },
                { text: 'Community Leadership', icon: Briefcase },
                { text: 'Global Understanding', icon: Globe },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/10 text-orange-400 rounded-lg">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-50">
                Focus Areas
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                'Youth Empowerment',
                'Basic Education & Literacy',
                'Economic Development',
                'Peace & Conflict Resolution',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
