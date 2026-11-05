import { Link } from 'react-router-dom';
import { PageHead } from '../components/PageHead';
import { Reveal } from '../components/Reveal';
import { SkillCard } from '../components/SkillCard';
import { profile, skills } from '../data/profile';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About me — kaz');
  return (
    <>
      <PageHead kicker="who am I?" title="About me" />
      <section className="section two-col">
        <Reveal className="about-text">
          <p>
            Hi, I’m <b>{profile.name}</b>. I’ve been coding for 3 years, mostly in <b>Lua</b>, and I also work with
            HTML, CSS, JavaScript, TypeScript, PHP, React and Python.
          </p>
          <p>
            I’m currently looking for <b>commissions</b> or a <b>developer job</b>. If you have a project, a system
            to build or a position to fill, let’s talk.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/contact">Contact me</Link>
            <a className="btn btn--outline" href={profile.github} target="_blank" rel="noreferrer">GitHub →</a>
          </div>
        </Reveal>
        <div>
          <h2 className="subtitle">Skills</h2>
          <div className="skills">
            {skills.map((skill, i) => (
              <SkillCard key={skill.title} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
