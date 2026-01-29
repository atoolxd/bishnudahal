import { useQuery } from '@tanstack/react-query';

const fetchBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blogs/`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const data = await res.json();
  return data.results;
};

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};
