import { useEffect, useState } from 'react';

const KEY = 'crispinit-theme';

function current() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(current);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1E2A3A' : '#F8FBFF');
  }, [theme]);

  // Follow the device setting until the visitor picks a theme themselves.
  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch { /* storage unavailable */ }
    if (saved || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const on = (e) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(KEY, next); } catch { /* storage unavailable */ }
  };

  const dark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {dark ? (
        <svg key="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg key="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
