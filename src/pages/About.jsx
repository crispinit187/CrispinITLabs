import { brand, experience, skills } from '../data/site.js';
import { ContactLinks, PageHead } from '../components/Shared.jsx';

export default function About() {
  return (
    <>
      <PageHead eyebrow="About" title="Hi, I am Crispin Libimba II.">
        A Computer Engineering student in Lusaka who builds websites and systems for the people around me.
      </PageHead>

      <section className="block tight">
        <div className="wrap">
          <div className="story reveal">
            <h2 className="disp">My story</h2>
            <p>
              I study Computer Engineering at the Copperbelt University, Lusaka Campus. I started building websites
              in {brand.since} because the businesses, churches and student groups around me needed a proper place
              online, and most of them could not find or afford one.
            </p>
            <p>
              {brand.name} is where I do that work. It is one developer, so you always talk to the person who is
              building your site, from the first mockup to the day it goes live and after.
            </p>
          </div>

          <h2 className="disp sub reveal">Skills and tools</h2>
          <ul className="chips reveal">
            {skills.map((s, i) => (
              <li key={s} style={{ animationDelay: `${i * 70}ms` }}>{s}</li>
            ))}
          </ul>

          <h2 className="disp sub reveal">Experience</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li className="reveal" key={e.title}>
                <span className="when">{e.when}</span>
                <h3>{e.title}</h3>
                <p className="where">{e.where}</p>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>

          <div className="cta reveal">
            <h2 className="disp">Want to work together?</h2>
            <ContactLinks />
          </div>
        </div>
      </section>
    </>
  );
}
