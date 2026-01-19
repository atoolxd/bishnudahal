'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image,  { StaticImageData } from 'next/image';

interface GalleryItem {
  src: string;
  title: string;
  description: string;
}

export default function Gallery() {
  const images: GalleryItem[] = [
    {
      src: '/assets/images/image.png',
      title: 'Community Outreach',
      description: 'Youth empowerment program in rural Nepal',
    },
    {
      src: '/assets/images/image.png',
      title: 'Clean Water Project',
      description: 'Installation of sustainable water systems',
    },
    {
      src: '/assets/images/image.png',
      title: 'Leadership Workshop',
      description: 'Training future community leaders',
    },
    {
      src: '/assets/images/image.png',
      title: 'Education Drive',
      description: 'Library setup for underprivileged students',
    },
    {
      src: '/assets/images/image.png',
      title: 'Health Awareness Camp',
      description: 'Free health checkups and awareness programs',
    },
    {
      src: '/assets/images/image.png',
      title: 'Women Empowerment',
      description: 'Skill development initiatives',
    },
  ];

  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-900">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">
          Gallery
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Moments captured from initiatives, programs, and community work that
          reflect our journey and impact.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-top transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="absolute bottom-0 p-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-slate-300 hover:text-white"
              aria-label="Close gallery preview"
            >
              <X size={28} />
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl text-slate-50 font-serif">
                {selected.title}
              </h3>
              <p className="text-slate-400 text-sm">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
