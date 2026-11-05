import { PageHead } from '../components/PageHead';
import { ProjectsEmpty } from '../components/ProjectsEmpty';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Projects() {
  useDocumentTitle('Projects — kaz');
  return (
    <>
      <PageHead kicker="what I’m building" title="Projects" />
      <div style={{ height: 32 }} />
      <ProjectsEmpty />
    </>
  );
}
