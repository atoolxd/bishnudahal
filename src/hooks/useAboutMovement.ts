// hooks/useAboutMovement.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAboutMovement } from "@/lib/api";

export const useAboutMovement = () =>
  useQuery({
    queryKey: ["about-movement"],
    queryFn: fetchAboutMovement,
  });
