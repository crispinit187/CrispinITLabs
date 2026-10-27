import { projects } from '../data/site.js';
import { PageHead, ProjectCard } from '../components/Shared.jsx';

export default function Portfolio() {
  return (
    <>
      <PageHead eyebrow="Portfolio" title="Websites built for real people in Zambia.">
        Each card shows what the project is, the tech behind it, and a live link once it is launched.
      </PageHead>
      <section className="block tight">
        <div className="wrap">
          <div className="grid g3">
            {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
