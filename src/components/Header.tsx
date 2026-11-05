import { Link, useMatch } from 'react-router-dom';
import { navLinks, profile, type NavLinkData } from '../data/profile';
import { HandLoop } from './HandDrawings';

function NavItem({ to, label }: NavLinkData) {
  const active = useMatch({ path: to, end: false }) !== null;
  return (
    <span className={active ? 'nav__item nav__item--active' : 'nav__item'}>
      <HandLoop />
      <Link className="nav__link" to={to} aria-current={active ? 'page' : undefined}>
        {label}
      </Link>
    </span>
  );
}

function Availability() {
  return (
    <span className="availability">
      <i className="availability__dot" />
      {profile.availability}
    </span>
  );
}

export function Header() {
  return (
    <header>
      <div className="wrap">
        <nav className="nav" aria-label="Main navigation">
          <Link className="nav__brand" to="/">{profile.name}</Link>
          <div className="nav__links">
            <Availability />
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
