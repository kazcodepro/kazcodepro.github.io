import { asset } from '../utils';

export interface Profile {
  readonly name: string;
  readonly discord: string;
  readonly github: string;
  readonly roblox: string;
  readonly availability: string;
}

export interface Work {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly video: string;
  readonly poster: string;
}

export interface Skill {
  readonly title: string;
  readonly detail: string;
}

/** ✏️ Edit your personal info here. */
export const profile: Profile = {
  name: 'kaz',
  discord: '6b617a',
  github: 'https://github.com/kazcodepro',
  roblox: 'https://www.roblox.com/users/profile?username=kazcodepro',
  availability: 'Always available',
};

const work = (id: number, title: string, description: string, tags: string[]): Work => ({
  id,
  title,
  description,
  tags,
  video: asset(`videos/work${id}.mp4`),
  poster: asset(`videos/work${id}.jpg`),
});

/** ✏️ Add a work: drop work6.mp4 + work6.jpg in /public/videos and add a line here. */
export const works: readonly Work[] = [
  work(1, 'Game UI & menus', 'In-game interface with pets, shop, rebirth, trading and auto-train / auto-throw buttons, scripted in Luau.', ['Luau', 'Roblox', 'UI']),
  work(2, 'Placing system', 'A placement mode: the player picks a spot and places objects directly in the world.', ['Luau', 'Roblox', 'Systems']),
  work(3, 'Plot, shop & upgrades', 'Player plot with shop, upgrades and sell buttons, plus a reward menu.', ['Luau', 'Roblox', 'Systems']),
  work(4, 'Stamina & gameplay', 'Character gameplay with a live stamina bar and movement.', ['Luau', 'Roblox', 'Gameplay']),
  work(5, 'Obby gameplay', 'Obby gameplay with moving pillars and a live leaderboard.', ['Luau', 'Roblox', 'Obby']),
];

export const skills: readonly Skill[] = [
  { title: 'Lua', detail: '3 years · main language' },
  { title: 'Front-end', detail: 'HTML, CSS, JavaScript, TypeScript, React' },
  { title: 'Back-end', detail: 'PHP, Python' },
  { title: 'Looking for', detail: 'Commissions & developer jobs' },
];

export const languages: readonly string[] = ['Lua', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'React', 'Python'];

/** ✏️ Texts of the big white banner. When you get reviews, put them here. */
export const announcements: readonly string[] = [
  'Open for commissions',
  'Looking for a developer job',
  '3 years of Lua',
  `DM me on Discord: ${profile.discord}`,
];

export interface NavLinkData {
  readonly to: string;
  readonly label: string;
}

export const navLinks: readonly NavLinkData[] = [
  { to: '/projects', label: 'Projects' },
  { to: '/works', label: 'Works' },
  { to: '/about', label: 'About me' },
  { to: '/contact', label: 'Contact' },
];
