import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  className?: string;
  delayMs?: number;
  children: ReactNode;
}

/** Wrapper that fades its children in when scrolled into view. */
export function Reveal({ className = '', delayMs = 0, children }: RevealProps) {
  const reveal = useReveal<HTMLDivElement>(delayMs);
  return (
    <div ref={reveal.ref} style={reveal.style} className={`${reveal.className} ${className}`.trim()}>
      {children}
    </div>
  );
}
