import { architectureHighlights } from '@/lib/data';

const ArchitectureGrid = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {architectureHighlights.map((item) => (
      <article
        key={item.title}
        className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card"
      >
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-200">
          {item.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export default ArchitectureGrid;
