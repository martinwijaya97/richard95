import { useEffect, useRef, useState } from 'react';

interface LazyIframeProps {
  src: string;
  title?: string;
  height?: number;
}

const LazyIframe: React.FC<LazyIframeProps> = ({
  src,
  title = 'Lazy Loaded Iframe',
  height = 600,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    if (!ref.current || loadIframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Optional: preload slightly before it's visible
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [loadIframe]);

  return (
    <div ref={ref} style={{ minHeight: `${height}px` }}>
      {loadIframe ? (
        <iframe
          src={src}
          title={title}
          className='w-full'
          style={{ height: `${height}px`, border: '0' }}
          loading='lazy'
        />
      ) : (
        <div
          style={{ height: `${height}px` }}
          className='flex items-center justify-center text-gray-500'
        >
          Loading chart...
        </div>
      )}
    </div>
  );
};

export default LazyIframe;
