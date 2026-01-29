'use client';

import { useQuery } from '@tanstack/react-query';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  cover_image: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE;

if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');
if (!MEDIA_BASE) throw new Error('NEXT_PUBLIC_MEDIA_BASE is not defined');

async function fetchGalleries(): Promise<GalleryItem[]> {
  const res = await fetch(`${API_BASE}/gallaries/`);
  if (!res.ok) throw new Error('Failed to fetch galleries');
  const json = await res.json();

  // Map API response to our GalleryItem type
  return json.results.map((g: any) => ({
    id: g.id,
    title: g.title_en,
    description: g.description_en.replace(/<[^>]+>/g, ''), // remove HTML tags
    cover_image: g.cover_image || '/assets/images/image.png',
  }));
}

export function useGalleries() {
  return useQuery<GalleryItem[], Error>({
    queryKey: ['galleries'],
    queryFn: fetchGalleries,
    staleTime: 1000 * 60 * 5, // cache 5 minutes
    refetchOnWindowFocus: false,
  });
}
