import { Link } from 'react-router-dom';
import { brand, projects, services, skills } from '../data/site.js';
import { useCountUp, useScrollSpy } from '../hooks.js';
import { ContactLinks, ProjectCard, ServiceCard } from '../components/Shared.jsx';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'why', label: 'Why me' },
  { id: 'start', label: 'Contact' },
];

function SectionSpy() {
  const active = useScrollSpy(sections.map((s) => s.id));
  const current = sections.find((s) => s.id === active) || sections[0];
  return (
    <nav className="spy" aria-label="Sections on this page">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#/#${s.id}`}
              className={s.id === active ? 'on' : ''}
              aria-current={s.id === active ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="spy-label">{s.label}</span>
              <span className="spy-dot" />
            </a>
          </li>
        ))}
      </ul>
      <p className="spy-now" aria-live="polite">You are viewing: {current.label}</p>
    </nav>
  );
}

function Stat({ target, label, note }) {
  const [ref, value] = useCountUp(target);
  return (
    <div className="stat" ref={ref}>
      <div className="disp stat-n">{value}</div>
      <div className="stat-l">{label}</div>
      <div className="stat-note">{note}</div>
    </div>
  );
}

export default function Home() {
  const years = Math.max(1, new Date().getFullYear() - brand.since);
  const liveProjects = projects.filter((p) => p.url).length;
  const ticker = [...skills, ...skills];

  return (
    <>
      <SectionSpy />

      <section id="intro" className="hero">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="wrap rel hero-grid">
          <div className="hero-copy">
            <p className="eyebrow rise d1"><span className="dot" />Web design and development &middot; {brand.region}</p>
            <h1 className="disp hero-title">
              <span className="rise d2">I build websites</span>
              <span className="rise d3">and systems that</span>
              <span className="rise d4 accent">work for your business.</span>
            </h1>
            <p className="lede rise d4">
              {brand.name} designs and builds fast, animated websites and management systems for businesses, schools,
              churches and organisations across Zambia.
            </p>
            <div className="hero-actions rise d5">
              <Link className="btn btn-dark" to="/portfolio">View my work</Link>
              <Link className="btn btn-outline" to="/contact">Contact me</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="mock">
              <div className="mock-bar"><i /><i /><i /><span /></div>
              <div className="mock-body">
                <div className="sk w62 h22" />
                <div className="sk w90 h12" />
                <div className="sk w74 h12" />
                <div className="mock-chart">
                  <b style={{ height: '45%', animationDelay: '.9s' }} />
                  <b style={{ height: '70%', animationDelay: '1.05s' }} />
                  <b style={{ height: '55%', animationDelay: '1.2s' }} />
                  <b style={{ height: '92%', animationDelay: '1.35s' }} />
                  <b style={{ height: '64%', animationDelay: '1.5s' }} />
                </div>
                <div className="mock-row"><div className="sk" /><div className="sk" /></div>
              </div>
            </div>
            <div className="chip c1">React</div>
            <div className="chip c2">Animated on every page</div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Technologies I use">
        <div className="track">
          {ticker.map((t, i) => (
            <span className="disp tick" key={`${t}-${i}`}>{t}<i /></span>
          ))}
        </div>
      </section>

      <section id="services" className="block">
        <div className="wrap">
          <div className="block-head reveal">
            <div>
              <p className="eyebrow">What I build</p>
              <h2 className="disp">Websites, apps and systems, built end to end.</h2>
            </div>
            <Link className="textlink big" to="/services">See all {services.length} services</Link>
          </div>
          <div className="grid">
            {services.slice(0, 4).map((s) => <ServiceCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>

      <section id="work" className="block">
        <div className="wrap">
          <div className="block-head reveal">
            <div>
              <p className="eyebrow">Featured work</p>
              <h2 className="disp">Recent projects for Zambian clients.</h2>
            </div>
            <Link className="textlink big" to="/portfolio">See all projects</Link>
          </div>
          <div className="grid g3">
            {projects.slice(0, 3).map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section id="why" className="dark-band">
        <div className="wrap why-grid">
          <div className="reveal">
            <p className="eyebrow light">Why {brand.name}</p>
            <h2 className="disp">One developer, start to finish.</h2>
            <p className="lede light">
              You work with the person who designs, builds and launches your site. I handle the domain, hosting and
              Google readiness, then show you how to run it.
            </p>
          </div>
          <div className="stats reveal">
            <Stat target={years} label="Years building" note={`Since ${brand.since}`} />
            <Stat target={liveProjects} label="Live projects" note="Counted from the portfolio" />
            <Stat target={skills.length} label="Technologies" note="Counted from the skills list" />
            <Stat target={services.length} label="Services offered" note="Quote on request" />
          </div>
        </div>
      </section>

      <section id="start" className="block">
        <div className="wrap">
          <div className="cta reveal">
            <h2 className="disp">Have a project in mind?</h2>
            <p className="lede">Tell me what you need and I will send you a quote.</p>
            <ContactLinks />
            <Link className="textlink" to="/contact">All contact details</Link>
          </div>
        </div>
      </section>
    </>
  );
}
