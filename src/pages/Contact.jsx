import { useState } from 'react';
import { contact } from '../data/site.js';
import { PageHead } from '../components/Shared.jsx';

function CopyRow({ label, value, href, external }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="contact-row lift reveal">
      <div>
        <div className="c-label">{label}</div>
        <div className="disp c-value">{value}</div>
      </div>
      <div className="c-actions">
        <a className="btn btn-dark" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          Open
        </a>
        <button className="btn btn-outline" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Contact" title="Tell me about your project.">
        Reach me directly by email, phone or WhatsApp. I reply with questions and a quote.
      </PageHead>
      <section className="block tight">
        <div className="wrap narrow">
          <CopyRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <CopyRow label="Phone" value={contact.phoneDisplay} href={`tel:${contact.phoneTel}`} />
          <CopyRow label="WhatsApp" value={contact.phoneDisplay} href={contact.whatsapp} external />
          <p className="muted note reveal">Phone and WhatsApp are the same number.</p>
        </div>
      </section>
    </>
  );
}
