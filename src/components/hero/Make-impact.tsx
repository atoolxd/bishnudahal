'use client';

import { useFeatures } from '@/hooks/usefeatures';
import DynamicHugeicon from '@/components/DynamicHugeicon';

export default function MakeImpact() {
  const { data, isLoading, error } = useFeatures();

  if (isLoading) return <p className="text-slate-400">Loading…</p>;
  if (error || !data) return <p>Error loading features</p>;

  const featured = data.filter(
    impact => impact.feature === 'impact-initiatives'
  );

  return (
    <section className="py-24 px-6 bg-slate-800/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-50 mb-4">
            Making an Impact
          </h2>
          <p className="text-slate-400 font-light max-w-2xl mx-auto">
            Through dedication and collaboration, we've achieved meaningful
            milestones in community development.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(impact => (
            <div
              key={impact.id}
              className="glass-card p-6 rounded-2xl text-center group hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex p-3 rounded-xl mb-4 bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <DynamicHugeicon iconName={impact.icon} size={24} />
              </div>

              <div className="text-lg font-bold text-slate-50 mb-1">
                {impact.title}
              </div>

              <div
                className="text-xs uppercase tracking-widest text-slate-400 font-medium"
                dangerouslySetInnerHTML={{ __html: impact.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
