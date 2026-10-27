import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { brand, contact } from './data/site.js';
import { useReveal } from './hooks.js';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);
  const { pathname } = useLocation();

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
        <Link to="/" className="brandmark" aria-label={`${brand.name} home`}>
          <span className="logo">CI</span>
          <span className="disp brandname">{brand.name}</span>
        </Link>
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
            <NavLink key={l.to} to={l.to} end={l.end} className="navl">
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-dark nav-cta">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
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
