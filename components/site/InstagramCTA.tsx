import { brand } from "@/lib/brand";
import { Reveal } from "@/components/ui/Reveal";

export function InstagramCTA() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-night/70 to-ink p-10 text-center md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(233,185,73,0.16),transparent_70%)]" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Votre projet est encore flou ?
            <br />
            <span className="text-gold">C'est justement notre point de départ.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sand">
            Expliquez votre besoin à OKTO, ou écrivez-nous directement sur Instagram.
            Le mail et le téléphone y sont aussi disponibles.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-gold-grad px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Nous écrire sur Instagram
            </a>
            <a
              href="/#experience"
              className="rounded-full border border-gold/30 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-gold/60"
            >
              Préparer ma demande avec OKTO
            </a>
          </div>
          <p className="mt-5 text-sm text-gold">@{brand.instagram}</p>
        </div>
      </div>
    </Reveal>
  );
}
