const STROKE = '#fff';

/** Hand-drawn loop used around the active / hovered nav item. */
export function HandLoop() {
  return (
    <svg className="hand-loop" aria-hidden="true" viewBox="0 0 96 44" preserveAspectRatio="none" fill="none">
      <path
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        d="M10 24 C 8 8, 70 2, 88 14 C 100 26, 40 44, 14 32 C 4 26, 20 10, 52 6"
        stroke={STROKE}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wavy underline that draws itself on load. */
export function HandUnderline({ width }: { width?: number | string }) {
  return (
    <svg
      className="hand-underline"
      style={{ width }}
      aria-hidden="true"
      viewBox="0 0 320 22"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        d="M4 14 C 40 4, 66 20, 104 10 S 170 4, 208 12 S 280 18, 316 6"
        stroke={STROKE}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Curved arrow pointing down. */
export function HandArrow() {
  return (
    <svg aria-hidden="true" width="56" height="64" viewBox="0 0 56 64" fill="none">
      <path d="M8 6 C 30 10, 46 30, 40 52" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 44 L40 54 L47 40" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
