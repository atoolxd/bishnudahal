'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FallbackImageProps {
  src?: string | null;
  alt: string;
  className?: string;
}

export default function FallbackImage({ src, alt, className }: FallbackImageProps) {
  const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE?.replace(/\/$/, '') || '';
  const fallback = '/assets/images/image.png';
  const [imgSrc, setImgSrc] = useState(fallback);

  useEffect(() => {
    if (!src) return setImgSrc(fallback);

    let finalSrc = src;

    // Check if src is already absolute (starts with http or https)
    const isAbsolute = /^https?:\/\//i.test(src);

    if (!isAbsolute) {
      // Remove leading '/media/' if exists
      if (src.startsWith('/media/')) {
        finalSrc = src.replace(/^\/media\//, '');
      }

      // Prepend MEDIA_BASE
      finalSrc = `${MEDIA_BASE}/${finalSrc}`;
    }

    setImgSrc(finalSrc);
  }, [src, MEDIA_BASE]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className || 'object-cover w-full h-full'}
      onError={() => setImgSrc(fallback)}
    />
  );
}
