'use client';

import { useFeatures } from '@/hooks/usefeatures';
import DynamicHugeicon from '@/components/DynamicHugeicon';

export default function FeaturedInitiatives() {
    const { data, isLoading, error } = useFeatures();

    if (isLoading) return <p className="text-slate-400">Loading…</p>;
    if (error || !data) return <p>Error loading features</p>;

    const featured = data.filter(
        item => item.feature === 'featured-initiatives'
    );

    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-50 mb-4">
                        Featured Initiatives
                    </h2>
                    <p className="text-slate-400 font-light max-w-2xl mx-auto">
                        Key projects that demonstrate our commitment to sustainable
                        community development.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featured.map(item => (
                        <div
                            key={item.id}
                            className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="inline-flex p-3 rounded-xl mb-6 bg-blue-500/10 text-blue-400">
                                <DynamicHugeicon iconName={item.icon} size={24} />
                            </div>

                            <h3 className="text-xl font-serif text-slate-50 mb-3">
                                {item.title}
                            </h3>

                            <div
                                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
