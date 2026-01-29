// src/hooks/useTimeline.ts
import { useQuery } from '@tanstack/react-query';

export interface TimelineItem {
  id: number;
  year: string;
  title_en: string;
  description_en: string;
  logo: string | null;
  logoname: string;
  is_milestone: boolean;
  order: number;
}

export const useTimeline = () => {
  return useQuery<TimelineItem[]>({
    queryKey: ['timeline'],
    queryFn: async () => {
      const res = await fetch('/timeline/');
      if (!res.ok) throw new Error('Failed to fetch timeline');
      const data = await res.json();
      return data.results;
    },
  });
};
