"use client";

import Link from "next/link";
import { useState } from "react";
import { KoomLogo } from "@/components/identity/KoomLogo";
import { brand } from "@/lib/brand";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#experience", label: "Parler à OKTO" },
    { href: "/services", label: "Services" },
    { href: "/#accompagnement", label: "Accompagnement" },
    { href: "/identite", label: "La marque" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-gold/10 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="KOOM/KOOM accueil">
          <KoomLogo size="sm" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-sand transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-gold-grad px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Instagram
          </a>
        </nav>
        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold/10 px-6 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-sand hover:text-cream"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener"
            className="mt-2 rounded-full bg-gold-grad px-4 py-2 text-center text-sm font-semibold text-ink"
          >
            Instagram
          </a>
        </nav>
      )}
    </header>
  );
}
