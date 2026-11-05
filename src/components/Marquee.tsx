import type { ReactNode } from 'react';

interface MarqueeProps {
  seconds?: number;
  reverse?: boolean;
  children: ReactNode;
}

/** Infinite horizontal scroller: the group is rendered twice for a seamless loop. */
export function Marquee({ seconds = 50, reverse = false, children }: MarqueeProps) {
  return (
    <div
      className="marquee"
      style={{ animationDuration: `${seconds}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
    >
      <div className="marquee__group">{children}</div>
      <div className="marquee__group" aria-hidden="true">{children}</div>
    </div>
  );
}
