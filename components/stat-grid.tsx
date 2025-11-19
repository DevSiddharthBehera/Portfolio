type StatGridProps = {
  stats: { label: string; value: string }[];
};

const StatGrid = ({ stats }: StatGridProps) => (
  <dl className="mt-10 grid gap-4 sm:grid-cols-3">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center shadow-card"
      >
        <dt className="text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</dt>
        <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
      </div>
    ))}
  </dl>
);

export default StatGrid;
