import { useEffect, useRef, useState, type CSSProperties } from 'react';

/** Fades an element in the first time it scrolls into view. Spread the result on the element. */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delayMs}ms` };
  return { ref, style, className: visible ? 'reveal reveal--in' : 'reveal' };
}
