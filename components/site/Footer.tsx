import Link from "next/link";
import { KoomLogo } from "@/components/identity/KoomLogo";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <KoomLogo size="sm" />
          <p className="mt-2 text-sm text-sand/70">{brand.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand">
          <Link href="/#experience" className="hover:text-cream">Parler à OKTO</Link>
          <Link href="/services" className="hover:text-cream">Services</Link>
          <Link href="/identite" className="hover:text-cream">La marque</Link>
          <a href={brand.instagramUrl} target="_blank" rel="noopener" className="hover:text-cream">
            @{brand.instagram}
          </a>
        </nav>
      </div>
      <div className="border-t border-gold/5 py-5 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} {brand.name} — Né et lancé au Sénégal 🇸🇳
      </div>
    </footer>
  );
}
