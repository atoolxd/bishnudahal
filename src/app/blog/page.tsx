'use client';
import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import FallbackImage from '@/components/FallbackImage';
import { useBlogs } from '@/hooks/useBlogs';

export default function Blog() {
  const { data: blogs, isLoading, isError } = useBlogs();

  if (isLoading) return <p className="text-center text-slate-400 pt-32">Loading blogs...</p>;
  if (isError || !blogs?.length) return <p className="text-center text-slate-400 pt-32">No blogs found.</p>;

  const [featured, ...rest] = blogs;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">Journal</h1>
          <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto">
            Thoughts on activism, leadership, and social change.
          </p>
        </header>

        {/* Featured Post */}
        <div className="mb-16 animate-slide-up">
          <article className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto relative overflow-hidden">
                <FallbackImage src={featured.featured_image} alt={featured.title_en} />
              </div>

              <div className="p-8 md:p-12 relative flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-widest">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md font-medium">
                    {featured.category.name_en}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar size={12} /> {new Date(featured.published_at).toLocaleDateString()}
                  </span>
                </div>

                <h2 className="text-3xl font-serif text-slate-50 mb-4 group-hover:text-blue-400 transition-colors">
                  {featured.title_en}
                </h2>
                <p
                  className="text-slate-300 font-light leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: featured.excerpt_en }}
                />
                <button className="flex items-center text-sm font-medium text-slate-100 group-hover:text-blue-400 transition-colors">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Grid for other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post: { id: React.Key | null | undefined; featured_image: string | null | undefined; title_en: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; category: { name_en: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; published_at: string | number | Date; excerpt_en: any; }) => (
            <article
              key={post.id}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full group animate-slide-up"
            >
              <div className="h-48 relative overflow-hidden rounded-t-xl">
                <FallbackImage src={post.featured_image} alt='jfr' />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest">
                  <span className="text-blue-400 font-medium flex items-center gap-1">
                    <Tag size={10} /> {post.category.name_en}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-500">{new Date(post.published_at).toLocaleDateString()}</span>
                </div>

                <h2 className="text-xl font-serif text-slate-50 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title_en}
                </h2>

                <p
                  className="text-slate-300 font-light leading-relaxed mb-4 text-sm line-clamp-3 flex-1"
                  dangerouslySetInnerHTML={{ __html: post.excerpt_en }}
                />

                <div className="pt-4 border-t border-slate-700">
                  <span className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-100 group-hover:text-blue-400 transition-colors">
                    Read More <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
