'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-slate-100 mb-4">
          Oops!
        </h1>
        <h2 className="text-2xl font-semibold text-slate-300 mb-8">
          Something went wrong
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again or go back to the home page.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-6 py-3"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="btn-secondary px-6 py-3"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}