interface SparkleProps {
  size: number;
  left: string;
  top: string;
  delay: number;
}

function Sparkle({ size, left, top, delay }: SparkleProps) {
  return (
    <svg
      className="sparkle"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: size, height: size, left, top, animationDelay: `${delay}s` }}
    >
      <path
        d="M12 2 C12 9 15 12 22 12 C15 12 12 15 12 22 C12 15 9 12 2 12 C9 12 12 9 12 2Z"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RINGS = [1, 2, 3, 4, 5, 6];
const SPARKLES: SparkleProps[] = [
  { size: 30, left: '8%', top: '14%', delay: 0 },
  { size: 20, left: '88%', top: '24%', delay: 1.1 },
  { size: 24, left: '80%', top: '80%', delay: 2 },
  { size: 16, left: '14%', top: '74%', delay: 0.6 },
];

/** Rotating white 3D globe (pure CSS) with twinkling sparkles. */
export function Orb() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="orb">
        {RINGS.map((n) => (
          <i key={n} className={`orb__ring orb__ring--${n}`} />
        ))}
      </div>
      <span className="orb__core" />
      {SPARKLES.map((s) => (
        <Sparkle key={s.left} {...s} />
      ))}
    </div>
  );
}
