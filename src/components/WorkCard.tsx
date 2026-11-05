import { useState } from 'react';
import type { Work } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export function WorkCard({ work, index }: { work: Work; index: number }) {
  const reveal = useReveal<HTMLElement>((index % 2) * 70);
  const [failed, setFailed] = useState(false);

  return (
    <article ref={reveal.ref} style={reveal.style} className={`${reveal.className} work-card`}>
      <div className="work-card__media">
        {failed ? (
          <span>Video not found: {work.video}</span>
        ) : (
          <video controls preload="metadata" playsInline poster={work.poster} onError={() => setFailed(true)}>
            <source src={work.video} type="video/mp4" onError={() => setFailed(true)} />
          </video>
        )}
      </div>
      <div className="work-card__body">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        <div className="tags">
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
