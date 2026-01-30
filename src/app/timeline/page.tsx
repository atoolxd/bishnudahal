'use client';

import React from 'react';
import { Briefcase, Heart, Globe } from 'lucide-react';
import { useTimeline } from '@/hooks/useTimeline';

const getIcon = (type: string) => {
  const t = type.toLowerCase();
  if (t.includes('rotery') || t.includes('rotary')) return <Globe size={16} />;
  if (t.includes('business')) return <Briefcase size={16} />;
  if (t.includes('social')) return <Heart size={16} />;
  return <Globe size={16} />;
};

export default function TimelinePage() {
  const { data: timeline, isLoading, isError, error } = useTimeline();

  const SkeletonCard = () => (
    <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center animate-pulse">
      <div className="md:w-1/2 md:px-12">
        <div className="glass-card p-6 rounded-xl relative overflow-hidden bg-slate-700/20">
          <div className="h-6 bg-slate-600 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-slate-600 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-slate-600 rounded w-full mb-1"></div>
          <div className="h-3 bg-slate-600 rounded w-full mb-1"></div>
          <div className="h-3 bg-slate-600 rounded w-5/6"></div>
          <div className="mt-3 h-5 w-20 rounded bg-slate-600"></div>
        </div>
      </div>
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full border-2 border-slate-900 shadow-md bg-slate-600"></div>
      </div>
      <div className="hidden md:block md:w-1/2 md:px-12">
        <div className="h-4 w-12 bg-slate-600 rounded"></div>
      </div>
    </div>
  );

  if (isLoading)
    return (
      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    );

  if (isError)
    return (
      <p className="text-center text-red-500 mt-12">
        {error?.message || 'Failed to load timeline'}
      </p>
    );

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">
            Journey
          </h1>
          <p className="text-slate-400 font-light text-lg max-w-xl mx-auto">
            A chronological overview of milestones in leadership, service, and entrepreneurship.
          </p>
        </header>

        <div className="space-y-12 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent -translate-x-1/2"></div>

          {timeline?.map((item, index) => (
            <article
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center group animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`md:w-1/2 md:px-12 ${
                  index % 2 === 0 ? 'md:text-right order-2 md:order-1' : 'order-2 md:order-3'
                }`}
              >
                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${
                      item.types.toLowerCase().includes('rotery')
                        ? 'bg-blue-500'
                        : item.types.toLowerCase().includes('business')
                        ? 'bg-slate-500'
                        : 'bg-orange-500'
                    }`}
                  ></div>

                  <div className="flex items-center gap-2 mb-2 md:hidden">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif text-slate-50 mb-1 group-hover:text-blue-400 transition-colors">
                    {item.title_en}
                  </h2>
                  <div className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2 md:justify-end md:flex-row-reverse">
                    {item.organization}
                  </div>
                  <p
                    className="text-slate-300 leading-relaxed font-light text-sm"
                    dangerouslySetInnerHTML={{ __html: item.description_en }}
                  ></p>

                  <div
                    className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium ${
                      item.types.toLowerCase().includes('rotery')
                        ? 'bg-blue-500/10 text-blue-400'
                        : item.types.toLowerCase().includes('business')
                        ? 'bg-slate-500/10 text-slate-400'
                        : 'bg-orange-500/10 text-orange-400'
                    }`}
                  >
                    {getIcon(item.types)} {item.types}
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 border-slate-900 shadow-md transition-all duration-300 group-hover:scale-125 ${
                    item.types.toLowerCase().includes('rotery')
                      ? 'bg-blue-500 ring-4 ring-blue-500/20'
                      : item.types.toLowerCase().includes('business')
                      ? 'bg-slate-500 ring-4 ring-slate-500/20'
                      : 'bg-orange-500 ring-4 ring-orange-500/20'
                  }`}
                ></div>
              </div>

              {/* Right Side (Date for desktop) */}
              <div
                className={`hidden md:block md:w-1/2 md:px-12 ${
                  index % 2 === 0 ? 'order-3' : 'text-right order-1'
                }`}
              >
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {item.year}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-slate-800/50 text-center animate-fade-in">
          <p className="text-slate-400 text-sm font-light italic">
            "Service to humanity is the best work of life."
          </p>
        </div>
      </div>
    </main>
  );
}
