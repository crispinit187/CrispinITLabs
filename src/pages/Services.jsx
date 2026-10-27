import { Link } from 'react-router-dom';
import { services } from '../data/site.js';
import { PageHead, ServiceCard } from '../components/Shared.jsx';

export default function Services() {
  const groups = [...new Set(services.map((s) => s.group))];
  return (
    <>
      <PageHead eyebrow="Services" title="Everything from first mockup to launch day.">
        Nine services in four stages. Prices depend on your project, so every service starts with a free quote.
      </PageHead>
      <section className="block tight">
        <div className="wrap">
          {groups.map((g) => (
            <div className="group" key={g}>
              <h2 className="group-title reveal">{g}</h2>
              <div className="grid">
                {services.filter((s) => s.group === g).map((s) => <ServiceCard key={s.id} s={s} />)}
              </div>
            </div>
          ))}
          <div className="cta reveal">
            <h2 className="disp">Not sure which one you need?</h2>
            <p className="lede">Describe what you want to achieve and I will recommend where to start.</p>
            <Link className="btn btn-dark" to="/contact">Contact us for a quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
