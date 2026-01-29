import React from 'react';
import { Briefcase, Heart, Globe } from 'lucide-react';
import { useTimeline } from '@/hooks/useTimeline';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'rotary' | 'business' | 'social';
}

const timelineData: TimelineItem[] = [
  {
    year: '2023 — Present',
    title: 'District Governor Nominee',
    organization: 'Rotary International District 3292',
    description:
      'Selected to lead the district with a focus on strengthening Rotary clubs, expanding membership, and increasing the impact of community service projects across Nepal.',
    type: 'rotary',
  },
  {
    year: '2021 — 2022',
    title: 'Club President',
    organization: 'Rotary Club of Kathmandu',
    description:
      'Led the club to achieve major service milestones and actively supported education, health, and community development initiatives.',
    type: 'rotary',
  },
  {
    year: '2014',
    title: 'Spokesperson',
    organization: 'Yuwa Manch Nepal (YMN)',
    description:
      'Served as spokesperson after previously holding the role of treasurer, contributing to youth advocacy, leadership programs, and national-level engagement.',
    type: 'social',
  },
  {
    year: '2013',
    title: 'Central Committee Member & Treasurer',
    organization: 'Yuwa Manch Nepal (YMN)',
    description:
      'Joined the central committee and was promoted to treasurer, supporting organizational growth and managing financial responsibilities.',
    type: 'social',
  },
  {
    year: '2012',
    title: 'Investor & Education Advocate',
    organization: 'Nabin English School',
    description:
      'Invested in the school as part of a socio-business initiative, focusing on improving access to quality education and student welfare.',
    type: 'business',
  },
  {
    year: '2010',
    title: 'Co-owner',
    organization: 'Amrit Smriti School (formerly Madhavi English School)',
    description:
      'Entered the education sector with a vision to provide quality early schooling and scholarship opportunities to over 500 students.',
    type: 'business',
  },
  {
    year: '2008',
    title: 'Market Re-establishment Lead',
    organization: 'Family Business – Malaysia',
    description:
      'Re-established the Malaysian market for the family business, strengthening cross-border operations and entrepreneurial confidence.',
    type: 'business',
  },
  {
    year: '2003',
    title: 'Marketing Intern',
    organization: 'Malaysian Corporations',
    description:
      'Worked as a marketing intern to learn business fundamentals, employee relations, and empathetic leadership practices.',
    type: 'business',
  },
  {
    year: '2002',
    title: 'Founder',
    organization: 'Jyoti Lingeshwar Youth Club',
    description:
      'Founded a social youth club in a remote area to promote sports, youth engagement, and community development.',
    type: 'social',
  },
  {
    year: '1997 — 2000',
    title: 'Student Leader',
    organization: 'School & District Level',
    description:
      'Actively involved in scouting, led school quiz teams to district victories, and won the Inter-School Speech Contest, building early leadership skills.',
    type: 'social',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'rotary':
      return <Globe size={16} />;
    case 'business':
      return <Briefcase size={16} />;
    case 'social':
      return <Heart size={16} />;
    default:
      return <Globe size={16} />;
  }
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">
            Journey
          </h1>
          <p className="text-slate-400 font-light text-lg max-w-xl mx-auto">
            A chronological overview of milestones in leadership, service, and
            entrepreneurship.
          </p>
        </header>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <article
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center group animate-slide-up`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`md:w-1/2 md:px-12 ${
                  index % 2 === 0
                    ? 'md:text-right order-2 md:order-1'
                    : 'order-2 md:order-3'
                }`}
              >
                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${
                      item.type === 'rotary'
                        ? 'bg-blue-500'
                        : item.type === 'business'
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
                    {item.title}
                  </h2>
                  <div className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2 md:justify-end md:flex-row-reverse">
                    {item.organization}
                  </div>
                  <p className="text-slate-300 leading-relaxed font-light text-sm">
                    {item.description}
                  </p>

                  <div
                    className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium ${
                      item.type === 'rotary'
                        ? 'bg-blue-500/10 text-blue-400'
                        : item.type === 'business'
                        ? 'bg-slate-500/10 text-slate-400'
                        : 'bg-orange-500/10 text-orange-400'
                    }`}
                  >
                    {getIcon(item.type)} {item.type}
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 border-slate-900 shadow-md transition-all duration-300 group-hover:scale-125 ${
                    item.type === 'rotary'
                      ? 'bg-blue-500 ring-4 ring-blue-500/20'
                      : item.type === 'business'
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