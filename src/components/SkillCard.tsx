import type { Skill } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const reveal = useReveal<HTMLDivElement>(index * 70);
  return (
    <div ref={reveal.ref} style={reveal.style} className={`${reveal.className} skill`}>
      <b>{skill.title}</b>
      <small>{skill.detail}</small>
    </div>
  );
}
