import { timeline } from '@/lib/data';

const ExperienceTimeline = () => (
  <ol className="space-y-8 border-l border-white/10 pl-6">
    {timeline.map((item) => (
      <li key={item.company} className="relative">
        <span className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
        <div className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.period}</p>
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="text-sm text-slate-300">{item.company}</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-200">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ol>
);

export default ExperienceTimeline;
