"use client";

import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/lib/data';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-ink/80 backdrop-blur supports-[backdrop-filter]:bg-ink/60 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Siddharth<span className="text-accent">.</span>
        </Link>
        <button
          className="md:hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-100"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
          >
            Start a project
          </Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="md:hidden border-t border-white/5 px-4 pb-6 text-sm font-medium text-slate-200">
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-2 transition hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="block rounded-md bg-white/10 px-2 py-2 text-center text-white"
                onClick={() => setIsOpen(false)}
              >
                Start a project
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
