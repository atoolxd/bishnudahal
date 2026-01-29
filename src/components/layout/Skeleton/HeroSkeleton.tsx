// components/HeroSkeleton.tsx
export default function HeroSkeleton() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-pulse">
      <div className="space-y-8 text-center lg:text-left">
        <div className="h-4 w-48 bg-slate-700 rounded mx-auto lg:mx-0" />
        <div className="h-14 w-3/4 bg-slate-700 rounded mx-auto lg:mx-0" />
        <div className="h-20 w-full bg-slate-700 rounded max-w-xl mx-auto lg:mx-0" />
        <div className="flex gap-4 justify-center lg:justify-start">
          <div className="h-12 w-32 bg-slate-700 rounded-full" />
          <div className="h-12 w-32 bg-slate-700 rounded-full" />
        </div>
      </div>

      <div className="mx-auto max-w-md">
        <div className="aspect-[4/5] h-[500px] w-[400px] bg-slate-800 rounded-2xl" />
      </div>
    </div>
  );
}
