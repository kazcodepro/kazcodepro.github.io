/* KAZ Portfolio — interactions + complete FR / EN / DE translations */

const cursor = document.querySelector('.cursor');
if (cursor) {
  window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '26px';
      cursor.style.height = '26px';
      cursor.style.background = 'rgba(255,255,255,.08)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursor.style.background = 'transparent';
    });
  });
}

const footerYear = document.querySelector('footer span');
if (footerYear) footerYear.textContent = `© ${new Date().getFullYear()} KAZ`;

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .08 });

document.querySelectorAll('.project,.section-head,.about-content,.contact-grid,.work-intro,.stack-grid')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

const translations = {
  fr: {
    title: 'Kaz — Full-Stack Developer',
    nav: ['Projets', 'À propos', 'Stack', 'Contact'],
    hero: {
      topLeft: '01 / FULL-STACK DEVELOPER', topRight: 'FRANCE · 2026',
      kicker: 'WEB · ROBLOX · SOFTWARE',
      intro: "Je développe des sites web et des systèmes Roblox. J'aime construire, apprendre et tester de nouvelles idées.",
      cta: 'Voir mes projets', contact: 'Me contacter', scroll: 'DÉFILER ↓'
    },
    work: {
      number: '02', title: 'Projets', meta: 'PROJETS PERSONNELS & CLIENTS',
      intro: "Quelques projets sur lesquels j'ai travaillé en web et sur Roblox, avec un focus sur le code, les systèmes et l'expérience utilisateur.",
      count: '01 PROJET DOCUMENTÉ',
      project1: { visual: '01 / ROBLOX', lang: 'LUAU', small: 'ROBLOX / LUAU · DÉVELOPPEMENT SOLO', title: '2 Player Boulder Obby', desc: "Jeu Roblox terminé développé seul, avec l'ensemble des scripts et systèmes du jeu.", status: 'TERMINÉ', gallery: 'APERÇU DU PROJET', videos: '05 VIDÉOS', captions: ['Interface & systèmes', 'Gameplay', 'Systèmes de jeu', 'Combat & gameplay', 'Gameplay Obby'] },
      project2: { visual: '02 / WEB', lang: 'FULL-STACK', small: 'WEB / FULL-STACK', title: 'Sites web sur mesure', desc: "Développement de sites et interfaces responsive avec une approche simple et fonctionnelle.", status: 'À VENIR' },
      project3: { visual: '03 / SOFTWARE', lang: 'BACKEND', small: 'BACKEND / AUTOMATISATION', title: 'Outils & systèmes', desc: 'Scripts, APIs et outils développés selon les besoins des projets.', status: 'À VENIR' }
    },
    about: {
      number: '03', title: 'À propos', meta: 'QUI EST KAZ ?', statement: 'Le développement est devenu une <em>passion.</em>', years: '3+ ans en Roblox · 1–2 ans en web',
      text: "Je développe depuis plusieurs années, principalement sur Roblox avec Luau, puis dans le développement web. J'aime apprendre, expérimenter et essayer de nouvelles technologies. J'ai aussi travaillé pour des clients, vendu des scripts et participé à des projets en équipe.",
      github: 'GitHub ↗', roblox: 'Roblox ↗', discord: 'Discord · 6b617a'
    },
    stack: { number: '04', title: 'Stack', meta: 'TECHNOLOGIES', frontend: 'FRONTEND', backend: 'BACKEND', database: 'BASE DE DONNÉES', other: 'AUTRES' },
    contact: {
      index: '05 / CONTACT', small: 'UN PROJET EN TÊTE ?', title: 'Parlons de<br><em>votre projet.</em>',
      text: "Site web, système Roblox ou autre projet : explique-moi ce que vous voulez construire.",
      name: 'Nom', namePh: 'Votre nom', email: 'Email', emailPh: 'votre@email.com', message: 'Message', messagePh: 'Parlez-moi de votre projet...', send: 'Envoyer le message'
    },
    footer: { built: 'CRÉÉ AVEC DU CODE', top: 'RETOUR EN HAUT ↑' },
    code: { role: 'Full-Stack Developer', web: 'React', game: 'Roblox / Luau', experience: '3+ years Roblox' }
  },
  en: {
    title: 'Kaz — Full-Stack Developer',
    nav: ['Projects', 'About', 'Stack', 'Contact'],
    hero: {
      topLeft: '01 / FULL-STACK DEVELOPER', topRight: 'FRANCE · 2026', kicker: 'WEB · ROBLOX · SOFTWARE',
      intro: 'I build websites and Roblox systems. I like creating, learning and experimenting with new ideas.',
      cta: 'View my projects', contact: 'Get in touch', scroll: 'SCROLL ↓'
    },
    work: {
      number: '02', title: 'Projects', meta: 'PERSONAL & CLIENT PROJECTS',
      intro: 'A selection of projects I have worked on in web development and Roblox, with a focus on code, systems and user experience.',
      count: '01 DOCUMENTED PROJECT',
      project1: { visual: '01 / ROBLOX', lang: 'LUAU', small: 'ROBLOX / LUAU · SOLO DEVELOPMENT', title: '2 Player Boulder Obby', desc: 'Completed Roblox game developed solo, including all of the game scripts and systems.', status: 'COMPLETED', gallery: 'PROJECT PREVIEW', videos: '05 VIDEOS', captions: ['UI & systems', 'Gameplay', 'Game systems', 'Combat & gameplay', 'Obby gameplay'] },
      project2: { visual: '02 / WEB', lang: 'FULL-STACK', small: 'WEB / FULL-STACK', title: 'Custom websites', desc: 'Responsive websites and interfaces built with a simple, functional approach.', status: 'COMING SOON' },
      project3: { visual: '03 / SOFTWARE', lang: 'BACKEND', small: 'BACKEND / AUTOMATION', title: 'Tools & systems', desc: 'Scripts, APIs and tools developed around project requirements.', status: 'COMING SOON' }
    },
    about: {
      number: '03', title: 'About', meta: 'WHO IS KAZ?', statement: 'Development became a <em>passion.</em>', years: '3+ years in Roblox · 1–2 years in web',
      text: 'I have been developing for several years, mainly on Roblox with Luau and more recently in web development. I enjoy learning, experimenting and trying new technologies. I have also worked with clients, sold scripts and contributed to team projects.',
      github: 'GitHub ↗', roblox: 'Roblox ↗', discord: 'Discord · 6b617a'
    },
    stack: { number: '04', title: 'Stack', meta: 'TECHNOLOGIES', frontend: 'FRONTEND', backend: 'BACKEND', database: 'DATABASE', other: 'OTHER' },
    contact: {
      index: '05 / CONTACT', small: 'HAVE A PROJECT IN MIND?', title: "Let's talk about<br><em>your project.</em>",
      text: 'Website, Roblox system or another project: tell me what you want to build.',
      name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@email.com', message: 'Message', messagePh: 'Tell me about your project...', send: 'Send message'
    },
    footer: { built: 'BUILT WITH CODE', top: 'BACK TO TOP ↑' },
    code: { role: 'Full-Stack Developer', web: 'React', game: 'Roblox / Luau', experience: '3+ years Roblox' }
  },
  de: {
    title: 'Kaz — Full-Stack Developer',
    nav: ['Projekte', 'Über mich', 'Stack', 'Kontakt'],
    hero: {
      topLeft: '01 / FULL-STACK DEVELOPER', topRight: 'FRANKREICH · 2026', kicker: 'WEB · ROBLOX · SOFTWARE',
      intro: 'Ich entwickle Websites und Roblox-Systeme. Ich programmiere gerne, lerne Neues und probiere neue Ideen aus.',
      cta: 'Meine Projekte ansehen', contact: 'Kontakt aufnehmen', scroll: 'SCROLLEN ↓'
    },
    work: {
      number: '02', title: 'Projekte', meta: 'EIGENE & KUNDENPROJEKTE',
      intro: 'Eine Auswahl meiner Projekte in der Webentwicklung und auf Roblox, mit Fokus auf Code, Systeme und Benutzererfahrung.',
      count: '01 DOKUMENTIERTES PROJEKT',
      project1: { visual: '01 / ROBLOX', lang: 'LUAU', small: 'ROBLOX / LUAU · SOLO-ENTWICKLUNG', title: '2 Player Boulder Obby', desc: 'Abgeschlossenes Roblox-Spiel, das ich allein entwickelt habe – inklusive aller Skripte und Spielsysteme.', status: 'ABGESCHLOSSEN', gallery: 'PROJEKT-VORSCHAU', videos: '05 VIDEOS', captions: ['UI & Systeme', 'Gameplay', 'Spielsysteme', 'Kampf & Gameplay', 'Obby-Gameplay'] },
      project2: { visual: '02 / WEB', lang: 'FULL-STACK', small: 'WEB / FULL-STACK', title: 'Individuelle Websites', desc: 'Responsive Websites und Interfaces mit einem einfachen und funktionalen Ansatz.', status: 'DEMNÄCHST' },
      project3: { visual: '03 / SOFTWARE', lang: 'BACKEND', small: 'BACKEND / AUTOMATISIERUNG', title: 'Tools & Systeme', desc: 'Skripte, APIs und Tools, die auf die Anforderungen eines Projekts zugeschnitten sind.', status: 'DEMNÄCHST' }
    },
    about: {
      number: '03', title: 'Über mich', meta: 'WER IST KAZ?', statement: 'Entwicklung ist zu einer <em>Leidenschaft</em> geworden.', years: '3+ Jahre Roblox · 1–2 Jahre Webentwicklung',
      text: 'Ich entwickle seit mehreren Jahren, hauptsächlich auf Roblox mit Luau und inzwischen auch im Webbereich. Ich lerne gerne, experimentiere und probiere neue Technologien aus. Außerdem habe ich für Kunden gearbeitet, Skripte verkauft und an Teamprojekten mitgewirkt.',
      github: 'GitHub ↗', roblox: 'Roblox ↗', discord: 'Discord · 6b617a'
    },
    stack: { number: '04', title: 'Stack', meta: 'TECHNOLOGIEN', frontend: 'FRONTEND', backend: 'BACKEND', database: 'DATENBANK', other: 'WEITERES' },
    contact: {
      index: '05 / KONTAKT', small: 'EIN PROJEKT IM KOPF?', title: 'Sprechen wir über<br><em>dein Projekt.</em>',
      text: 'Website, Roblox-System oder ein anderes Projekt: Erzähl mir, was du bauen möchtest.',
      name: 'Name', namePh: 'Dein Name', email: 'E-Mail', emailPh: 'du@email.com', message: 'Nachricht', messagePh: 'Erzähl mir von deinem Projekt...', send: 'Nachricht senden'
    },
    footer: { built: 'MIT CODE ERSTELLT', top: 'NACH OBEN ↑' },
    code: { role: 'Full-Stack Developer', web: 'React', game: 'Roblox / Luau', experience: '3+ Jahre Roblox' }
  }
};

function setHTML(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}
function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}
function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.fr;
  document.documentElement.lang = lang;
  document.title = t.title;

  const nav = document.querySelectorAll('.nav nav a');
  t.nav.forEach((value, i) => { if (nav[i]) nav[i].textContent = value; });

  setText('.hero-top span:first-child', t.hero.topLeft);
  setText('.hero-top span:last-child', t.hero.topRight);
  setText('.kicker', t.hero.kicker);
  setText('.hero-intro', t.hero.intro);
  setText('.primary-link span', t.hero.cta);
  setHTML('.hero-links > a:last-child', `${t.hero.contact} <b>↗</b>`);
  setText('.hero-bottom span:last-child', t.hero.scroll);

  setText('.section-head:nth-of-type(1) > span:first-child', t.work.number);
  setText('.work .section-head h2', t.work.title);
  setText('.work .section-head > span:last-child', t.work.meta);
  setText('.work-intro p', t.work.intro);
  setText('.work-count', t.work.count);

  setText('.project-large .visual-top span:first-child', t.work.project1.visual);
  setText('.project-large .visual-top span:last-child', t.work.project1.lang);
  setText('.project-large .project-meta small', t.work.project1.small);
  setText('.project-large .project-meta h3', t.work.project1.title);
  setText('.project-large .project-meta p', t.work.project1.desc);
  setText('.project-large .project-status', t.work.project1.status);
  setText('.video-gallery-head span:first-child', t.work.project1.gallery);
  setText('.video-gallery-head span:last-child', t.work.project1.videos);
  document.querySelectorAll('.video-card figcaption b').forEach((el, i) => { if (t.work.project1.captions[i]) el.textContent = t.work.project1.captions[i]; });

  const p2 = document.querySelectorAll('.projects .project')[1];
  const p3 = document.querySelectorAll('.projects .project')[2];
  if (p2) {
    setText('.projects .project:nth-child(2) .visual-top span:first-child', t.work.project2.visual);
    setText('.projects .project:nth-child(2) .visual-top span:last-child', t.work.project2.lang);
    setText('.projects .project:nth-child(2) .project-meta small', t.work.project2.small);
    setText('.projects .project:nth-child(2) .project-meta h3', t.work.project2.title);
    setText('.projects .project:nth-child(2) .project-meta p', t.work.project2.desc);
    setText('.projects .project:nth-child(2) .project-status', t.work.project2.status);
  }
  if (p3) {
    setText('.projects .project:nth-child(3) .visual-top span:first-child', t.work.project3.visual);
    setText('.projects .project:nth-child(3) .visual-top span:last-child', t.work.project3.lang);
    setText('.projects .project:nth-child(3) .project-meta small', t.work.project3.small);
    setText('.projects .project:nth-child(3) .project-meta h3', t.work.project3.title);
    setText('.projects .project:nth-child(3) .project-meta p', t.work.project3.desc);
    setText('.projects .project:nth-child(3) .project-status', t.work.project3.status);
  }

  setText('.about .section-head > span:first-child', t.about.number);
  setText('.about .section-head h2', t.about.title);
  setText('.about .section-head > span:last-child', t.about.meta);
  setHTML('.about .statement', t.about.statement);
  setText('.about-years', t.about.years);
  setText('.about-side > p', t.about.text);
  setText('.profile-links a:first-child', t.about.github);
  setText('.profile-links a:nth-child(2)', t.about.roblox);
  setText('.profile-links span', t.about.discord);

  setText('.stack-section .section-head > span:first-child', t.stack.number);
  setText('.stack-section .section-head h2', t.stack.title);
  setText('.stack-section .section-head > span:last-child', t.stack.meta);
  const stackLabels = document.querySelectorAll('.stack-group > small');
  [t.stack.frontend, t.stack.backend, t.stack.database, t.stack.other].forEach((v, i) => { if (stackLabels[i]) stackLabels[i].textContent = v; });

  setText('.contact-index', t.contact.index);
  setText('.contact-small', t.contact.small);
  setHTML('.contact h2', t.contact.title);
  setText('.contact-side > p', t.contact.text);
  const labels = document.querySelectorAll('.contact-form label');
  const labelValues = [t.contact.name, t.contact.email, t.contact.message];
  labels.forEach((label, i) => {
    const input = label.querySelector('input, textarea');
    if (!input) return;
    label.childNodes[0].textContent = labelValues[i] || '';
  });
  setAttr('.contact-form input[name="name"]', 'placeholder', t.contact.namePh);
  setAttr('.contact-form input[name="email"]', 'placeholder', t.contact.emailPh);
  setAttr('.contact-form textarea[name="message"]', 'placeholder', t.contact.messagePh);
  setHTML('.contact-form button', `${t.contact.send} <span>↗</span>`);

  setText('footer span:nth-child(2)', t.footer.built);
  setText('footer a', t.footer.top);

  // Keep the code sample readable while translating its human-facing values.
  const codeStrings = document.querySelectorAll('.code-body .str');
  if (codeStrings.length >= 4) {
    codeStrings[0].textContent = `"${t.code.role}"`;
    codeStrings[1].textContent = `"${t.code.web}"`;
    codeStrings[2].textContent = `"${t.code.game}"`;
    codeStrings[3].textContent = `"${t.code.experience}"`;
  }

  document.querySelectorAll('.lang').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  try { localStorage.setItem('kaz-language', lang); } catch (_) {}
}

document.querySelectorAll('.lang').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

let savedLanguage = 'fr';
try { savedLanguage = localStorage.getItem('kaz-language') || 'fr'; } catch (_) {}
applyLanguage(savedLanguage);
