type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-10 max-w-2xl">
    {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
    <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base text-slate-300">{description}</p>}
  </div>
);

export default SectionHeading;
