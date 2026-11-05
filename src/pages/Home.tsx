import { Link } from 'react-router-dom';
import { HandArrow, HandUnderline } from '../components/HandDrawings';
import { Orb } from '../components/Orb';
import { ProjectsEmpty } from '../components/ProjectsEmpty';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('kaz — Developer');
  return (
    <>
      <section className="hero">
        <Orb />
        <h1>
          I code interfaces.<br />
          <span>I draw them first.</span>
        </h1>
        <HandUnderline width={320} />
        <p className="hero__intro">
          I’m a <b>web developer</b>. I design and build <b>websites, applications and systems</b> from A to Z:
          interface design, front-end code, back-end logic and deployment. I like products that are simple,
          fast and well finished.
        </p>
        <Link className="hand hero__next" to="/works">
          <span>my work</span>
          <HandArrow />
        </Link>
      </section>

      <ProjectsEmpty />

      <section className="section section--flush-bottom">
        <div className="hand cta__title">a project, a job?</div>
        <Link className="cta__link" to="/contact">
          Contact me →
          <HandUnderline />
        </Link>
      </section>
    </>
  );
}
