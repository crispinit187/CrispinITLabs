import { useEffect, useRef, useState } from 'react';

export const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fades elements in as they scroll into view. Anything already visible stays visible. */
export function useReveal(dep) {
  useEffect(() => {
    if (reduceMotion() || !('IntersectionObserver' in window)) return undefined;
    const els = Array.from(document.querySelectorAll('.reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('pre');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.92) {
        el.classList.add('pre');
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, [dep]);
}

/** Returns the id of the section that is currently across the middle of the screen. */
export function useScrollSpy(ids, dep) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    setActive(ids[0]);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|'), dep]);
  return active;
}

/** Counts from 0 to target once the element is on screen. */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [value, setValue] = useState(target);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion() || !('IntersectionObserver' in window)) return undefined;
    let raf;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - t0) / duration);
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setValue(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration]);
  return [ref, value];
}
