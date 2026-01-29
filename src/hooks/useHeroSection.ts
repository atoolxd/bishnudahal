// hooks/useHeroSection.ts
import { useQuery } from "@tanstack/react-query";
import { fetchHeroSection } from "@/lib/api";

export const useHeroSection = () =>
  useQuery({
    queryKey: ["hero-section"],
    queryFn: fetchHeroSection,
  });
