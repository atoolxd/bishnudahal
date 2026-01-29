// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export const fetchAboutMovement = async () => {
  const res = await fetch(
    `${API_BASE_URL}/about-movement/`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about movement");
  }

  return res.json();
};




export const fetchHeroSection = async () => {
  const res = await fetch(
    `${API_BASE_URL}/hero-section/`,
    {
      cache: "no-store", // ✅ client-only fetch (standard)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch hero section");
  }

  return res.json();
};