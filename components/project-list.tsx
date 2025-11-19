import { projects } from '@/lib/data';

const ProjectList = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {projects.map((project) => {
      const isExternal = project.link.startsWith('http');
      return (
        <article
          key={project.title}
          className="flex h-full flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-card"
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <a
              href={project.link}
              className="text-sm text-accent underline-offset-4 hover:underline"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              {isExternal ? 'Live demo' : 'Discuss'}
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-200">{project.description}</p>
          <p className="mt-4 text-sm font-medium text-slate-100">{project.impact}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-300">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </article>
      );
    })}
  </div>
);

export default ProjectList;
