'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface TimelineItem {
  id: number;
  year: string;
  title_en: string;
  organization: string;
  description_en: string;
  logo: string | null;
  types: string; // <-- now string
}
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const fetchTimeline = async (): Promise<TimelineItem[]> => {
  const res = await fetch(`${API_BASE}/timeline/`);
  if (!res.ok) throw new Error('Failed to fetch timeline');
  const data = await res.json();
  return data.results;
};

export const useTimeline = () => {
  return useQuery<TimelineItem[], Error>({
    queryKey: ['timeline'],
    queryFn: fetchTimeline,
    staleTime: 1000 * 60 * 5, // 5 min caching
  });
};
