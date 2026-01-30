import { useQuery } from '@tanstack/react-query';

export interface FeatureItem {
  id: number;
  feature: string;
  title: string;
  icon: string;
  description: string;
  ordering: number;
}

export function useFeatures() {
  return useQuery<FeatureItem[]>({
    queryKey: ['features'],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/features/`
      );

      if (!res.ok) {
        throw new Error('Failed to fetch features');
      }

      const data = await res.json();
      return data.results;
    },
    staleTime: 1000 * 60 * 5, // ✅ 5 minutes
    refetchOnWindowFocus: false,
  });
}
