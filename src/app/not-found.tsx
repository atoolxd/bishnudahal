import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-serif font-bold text-slate-100 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-slate-300 mb-8">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="btn-primary px-8 py-4 text-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}