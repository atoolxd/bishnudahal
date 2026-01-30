'use client';

import { useFeatures } from '@/hooks/usefeatures';
import DynamicHugeicon from '@/components/DynamicHugeicon';
import { Heart } from 'lucide-react';

export default function Cores() {
  const { data, isLoading, error } = useFeatures();

  if (isLoading) return <p className="text-slate-400">Loading…</p>;
  if (error || !data) return <p>Error loading features</p>;

  const featured = data.filter(
    impact => impact.feature === 'about-initiatives'
  );
  return(
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {featured.map(impact => (

          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                <DynamicHugeicon iconName={impact.icon} size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-50">
                {impact.title}
              </h3>
            </div>

            <ul className="space-y-4" dangerouslySetInnerHTML={{ __html: impact.description }} />
          </div>

        //   <div className="glass-card p-8 rounded-2xl">
        //     <div className="flex items-center gap-3 mb-6">
        //       <div className="p-2 bg-orange-500/10 text-orange-400 rounded-lg">
        //         <DynamicHugeicon iconName={impact.icon} size={24} />
        //       </div>
        //       <h3 className="text-xl font-serif text-slate-50">
        //         Focus Areas
        //       </h3>
        //     </div>

        //     <ul className="space-y-4">
        //       {[
        //         'Youth Empowerment',
        //         'Basic Education & Literacy',
        //         'Economic Development',
        //         'Peace & Conflict Resolution',
        //       ].map((item, i) => (
        //         <li
        //           key={i}
        //           className="flex items-center gap-3 text-slate-300 font-light"
        //         >
        //           <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        //           {item}
        //         </li>
        //       ))}
        //     </ul>
        //   </div> 
            ))}
        </section>
  )}