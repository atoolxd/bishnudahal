'use client';
import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string; // path to image in public folder
}

// Sample posts with real images
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Community-Led Development',
    date: 'October 15, 2023',
    category: 'Social Impact',
    excerpt:
      'Why sustainable change must start from within the community itself, and how we can support local leaders in driving this transformation.',
    image: '/images/image.png',
  },
  {
    id: '2',
    title: 'Reflections on Rotary Year 2023',
    date: 'September 2, 2023',
    category: 'Rotary',
    excerpt:
      'Looking back at our key achievements this year, from the literacy drive in rural districts to the successful sanitation project launch.',
    image: '/images/image.png',
  },
  {
    id: '3',
    title: 'Youth Leadership in the 21st Century',
    date: 'August 10, 2023',
    category: 'Youth',
    excerpt:
      "Today's youth are not just the leaders of tomorrow; they are the partners of today. Exploring how we can better engage young minds.",
    image: '/images/image.png',
  },
  {
    id: '4',
    title: 'Building Bridges Through Service',
    date: 'July 22, 2023',
    category: 'Perspective',
    excerpt:
      'How service projects can unite diverse groups of people and foster understanding across cultural and economic divides.',
    image: '/images/blog4.jpg',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">
            Journal
          </h1>
          <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto">
            Thoughts on activism, leadership, and social change.
          </p>
        </header>

        {/* Featured Post */}
        <div className="mb-16 animate-slide-up">
          <article className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-64 md:h-auto relative overflow-hidden">
                <Image
                  src='/assets/images/bishnudahal.png'
                  alt='nmv'
                  fill
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-multiply"></div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 relative flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-widest">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md font-medium">
                    {posts[0].category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar size={12} /> {posts[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-serif text-slate-50 mb-4 group-hover:text-blue-400 transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-slate-300 font-light leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>
                <button className="flex items-center text-sm font-medium text-slate-100 group-hover:text-blue-400 transition-colors">
                  Read Article{' '}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Grid for other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full group animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest">
                  <span className="text-blue-400 font-medium flex items-center gap-1">
                    <Tag size={10} /> {post.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-500">{post.date}</span>
                </div>

                <h2 className="text-xl font-serif text-slate-50 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-slate-300 font-light leading-relaxed mb-4 text-sm line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-700">
                  <span className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-100 group-hover:text-blue-400 transition-colors">
                    Read More{' '}
                    <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
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
