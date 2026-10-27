import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

// On Home, the section across the reading line decides which link is active.
const homeSections = [
  { id: 'intro', to: '/' },
  { id: 'services', to: '/services' },
  { id: 'work', to: '/portfolio' },
  { id: 'why', to: '/about' },
  { id: 'start', to: '/contact' },
];

/**
 * Floating pill nav. A highlight slides behind the active link. After the page is
 * scrolled, the bar fades away and shows only the name of the section you are in,
 * crossfading to the next one. Hover or focus brings the other links back.
 */
export default function FloatingNav() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const navRef = useRef(null);
  const pillRef = useRef(null);
  const linkRefs = useRef([]);
  const [scrolled, setScrolled] = useState(false);
  const [homeActive, setHomeActive] = useState('/');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (!onHome) return;
      const line = window.innerHeight * 0.35;
      let to = '/';
      homeSections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) to = s.to;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        to = homeSections[homeSections.length - 1].to;
      }
      setHomeActive(to);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onHome, pathname]);

  const activeTo = onHome ? homeActive : pathname;
  const activeIndex = links.findIndex((l) => l.to === activeTo);

  const place = useCallback(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    const a = linkRefs.current[activeIndex];
    if (!nav || !pill) return;
    if (!a) {
      pill.style.opacity = 0;
      return;
    }
    pill.style.width = `${a.offsetWidth}px`;
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
    pill.style.opacity = 1;
    if (nav.scrollWidth > nav.clientWidth) {
      nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: 'smooth' });
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    place();
  }, [place, scrolled]);

  useEffect(() => {
    window.addEventListener('resize', place);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    return () => window.removeEventListener('resize', place);
  }, [place]);

  return (
    <nav
      ref={navRef}
      className={`nav ${scrolled ? 'scrolled' : ''} ${activeIndex >= 0 ? 'single' : ''}`}
      aria-label="Main"
    >
      <span ref={pillRef} className="nav-pill" aria-hidden="true" />
      {links.map((l, i) => (
        <Link
          key={l.to}
          to={l.to}
          ref={(el) => { linkRefs.current[i] = el; }}
          className={i === activeIndex ? 'active' : ''}
          aria-current={i === activeIndex ? 'true' : undefined}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
