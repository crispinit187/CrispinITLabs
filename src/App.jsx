import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { brand, contact } from './data/site.js';
import { useReveal } from './hooks.js';
import ThemeToggle from './components/ThemeToggle.jsx';
import FloatingNav from './components/FloatingNav.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

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
      <FloatingNav />
      <div className="theme-slot"><ThemeToggle /></div>
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
