import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-[#a6a010]"></div>
        <Image
          src="/assets/images/logo.png"
          alt="Loading Logo"
          fill
          className="object-contain p-3"
          priority
        />
      </div>
    </div>
  );
}
