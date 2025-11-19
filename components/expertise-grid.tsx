import { expertiseCards } from '@/lib/data';

const ExpertiseGrid = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {expertiseCards.map((card) => (
      <article
        key={card.title}
        className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
      >
        <h3 className="text-xl font-semibold text-white">{card.title}</h3>
        <p className="mt-3 text-sm text-slate-300">{card.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-200">
          {card.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export default ExpertiseGrid;
