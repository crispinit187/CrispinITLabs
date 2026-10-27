import { Link } from 'react-router-dom';
import { contact } from '../data/site.js';

export function ServiceCard({ s }) {
  return (
    <article className="card service-card lift reveal">
      <span className="tag">{s.tag}</span>
      <h3>{s.title}</h3>
      <p>{s.text}</p>
      <Link className="textlink" to="/contact">Contact us for a quote</Link>
    </article>
  );
}

export function ProjectCard({ p }) {
  const live = Boolean(p.url);
  return (
    <article className="card project-card lift reveal">
      <div className="shot-wrap">
        <div className="shot" aria-hidden="true">
          <div className="sh-bar" style={{ background: p.tones[0] }} />
          <div className="sh-hero" style={{ background: p.tones[1] }} />
          <div className="sh-row">
            <div style={{ background: p.tones[0] }} />
            <div style={{ background: '#9DB7D5' }} />
          </div>
        </div>
        {!live && <span className="badge">Coming soon</span>}
      </div>
      <div className="project-body">
        <h3>{p.name}</h3>
        <p>{p.text}</p>
        <div className="project-foot">
          <span className="pill">{p.tech}</span>
          {live ? (
            <a className="textlink" href={p.url} target="_blank" rel="noreferrer">View live site</a>
          ) : (
            <span className="muted">Link coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ContactLinks({ light }) {
  return (
    <div className={`contact-actions ${light ? 'light' : ''}`}>
      <a className="btn btn-dark" href={`mailto:${contact.email}`}>Email me</a>
      <a className="btn btn-outline" href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className="btn btn-outline" href={`tel:${contact.phoneTel}`}>Call</a>
    </div>
  );
}

export function PageHead({ eyebrow, title, children }) {
  return (
    <section className="page-head">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="wrap rel">
        <p className="eyebrow rise d1">{eyebrow}</p>
        <h1 className="disp rise d2">{title}</h1>
        {children && <p className="lede rise d3">{children}</p>}
      </div>
    </section>
  );
}
