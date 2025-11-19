import { contactChannels } from '@/lib/data';

const ContactPanel = () => (
  <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-primary/20 via-ink to-ink p-8 shadow-card">
    <p className="text-slate-200">I reply within 2 business days with a project plan or next steps.</p>
    <ul className="mt-6 space-y-4 text-sm">
      {contactChannels.map((channel) => (
        <li key={channel.label} className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">{channel.label}</span>
          <a href={channel.href} className="text-lg font-semibold text-white hover:underline">
            {channel.value}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactPanel;
