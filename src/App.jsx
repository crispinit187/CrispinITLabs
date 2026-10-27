import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { brand, contact } from './data/site.js';
import { useReveal, useScrollSpy } from './hooks.js';
import ThemeToggle from './components/ThemeToggle.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

// On Home, the section in view decides which link is underlined.
const homeSections = ['intro', 'services', 'work', 'why', 'start'];
const sectionToLink = {
  intro: '/',
  services: '/services',
  work: '/portfolio',
  why: '/about',
  start: '/contact',
};

function Header() {
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const section = useScrollSpy(onHome ? homeSections : [], pathname);
  const activeTo = onHome ? sectionToLink[section] || '/' : pathname;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setRaised(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`site-header ${raised ? 'raised' : ''}`}>
      <div className="header-inner">
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="main-nav" className={`main-nav ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`navl ${activeTo === l.to ? 'active' : ''}`}
              aria-current={activeTo === l.to ? 'true' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong className="disp">{brand.name}</strong>
          <p>Websites and systems for Zambian businesses and organisations.</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()} {brand.name}</p>
      </div>
    </footer>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useReveal(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <Header />
      <main id="content" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
