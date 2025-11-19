import Link from 'next/link';
import { navItems } from '@/lib/data';

const SiteFooter = () => (
  <footer className="border-t border-white/5 bg-black/40 py-10 text-sm text-slate-400">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Siddharth Behera. All rights reserved.</p>
      <div className="flex flex-wrap gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default SiteFooter;
