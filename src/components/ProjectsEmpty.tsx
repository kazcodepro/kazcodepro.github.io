import { Link } from 'react-router-dom';

/** Shown while there are no projects yet. */
export function ProjectsEmpty() {
  return (
    <section className="section section--flush-top" id="projects">
      <div className="section__head">
        <span className="section__label">Projects (00)</span>
        <span className="hand section__aside">coming soon</span>
      </div>
      <div className="empty">
        <div className="hand empty__title">no projects yet…</div>
        <p>I’m working on my first ones. In the meantime, you can watch some of the systems I’ve built.</p>
        <Link className="btn" to="/works">See my works →</Link>
      </div>
    </section>
  );
}
