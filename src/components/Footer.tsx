import { profile } from '../data/profile';

export function Footer() {
  return (
    <div className="wrap">
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Coded by hand</span>
      </footer>
    </div>
  );
}
