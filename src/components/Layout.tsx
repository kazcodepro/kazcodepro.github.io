import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Ribbon } from './Ribbon';

export function Layout() {
  const { pathname } = useLocation();

  // Start every page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="wrap">
        <Outlet />
      </main>
      <Ribbon />
      <Footer />
    </>
  );
}
