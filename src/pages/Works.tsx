import { PageHead } from '../components/PageHead';
import { WorkCard } from '../components/WorkCard';
import { works } from '../data/profile';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Works() {
  useDocumentTitle('Works — kaz');
  return (
    <>
      <PageHead kicker="on top of the projects" title="Works">
        Systems I built in Roblox Studio with Luau, shown on video.
      </PageHead>
      <section className="section">
        <div className="work-grid">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
