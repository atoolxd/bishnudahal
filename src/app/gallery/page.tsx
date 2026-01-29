'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useGalleries, GalleryItem } from '@/hooks/useGalleries';
import FallbackImage from '@/components/FallbackImage';

export default function Gallery() {
  const { data: galleries, isLoading, isError } = useGalleries();
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  if (isLoading) return <p className="text-center text-slate-400 pt-32">Loading galleries...</p>;
  if (isError || !galleries?.length) return <p className="text-center text-slate-400 pt-32">No galleries found.</p>;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">Gallery</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Moments captured from initiatives, programs, and community work that reflect our journey and impact.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.cover_image.startsWith('http') ? item.cover_image : `${process.env.NEXT_PUBLIC_MEDIA_BASE}${item.cover_image}`}
                alt={item.title}
                fill
                className="object-cover object-top transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-0 p-5 text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-slate-300 hover:text-white"
              aria-label="Close gallery preview"
            >
              <X size={28} />
            </button>

            <div className="relative w-full h-[80vh]">
              <FallbackImage src={selected.cover_image} alt={selected.title} 
                className="object-contain rounded-xl" />
             
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl text-slate-50 font-serif">{selected.title}</h3>
              <p className="text-slate-400 text-sm">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
