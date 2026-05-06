import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface DarkHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Path under /images/personagens/ for the right-column character */
  characterSrc?: string;
  characterAlt?: string;
  /** Override the right column with a custom component */
  rightSlot?: React.ReactNode;
  id?: string;
}

export function DarkHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  characterSrc,
  characterAlt = "Personagem Autigames",
  rightSlot,
  id = "page-hero-title",
}: DarkHeroProps) {
  const showRight = rightSlot || characterSrc;

  return (
    <section
      className="relative overflow-hidden gradient-hero-bg pt-12 lg:pt-16 pb-12 lg:pb-16"
      aria-labelledby={id}
    >
      {/* Grid overlay */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      {/* Orbs */}
      <div className="orb-base orb-1" aria-hidden="true" />
      <div className="orb-base orb-2" aria-hidden="true" />
      <div className="orb-base orb-3" aria-hidden="true" />

      {/* Floating puzzle pieces */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="puzzle-deco puzzle-a" src="/images/puzzle/puzzle-blue.png"   alt="" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="puzzle-deco puzzle-b" src="/images/puzzle/puzzle-purple.png" alt="" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="puzzle-deco puzzle-c" src="/images/puzzle/puzzle-green.png"  alt="" aria-hidden="true" />

      <div className="container-default relative z-10">
        <div className={`grid ${showRight ? "lg:grid-cols-2" : "max-w-3xl mx-auto"} gap-10 items-center`}>

          {/* ── TEXT ── */}
          <div className={showRight ? "" : "text-center"}>
            {/* Eyebrow */}
            <div className="flex w-fit max-w-full items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/7 backdrop-blur-sm mb-6">
              <span className="badge-dot" aria-hidden="true" />
              <span className="text-xs font-bold text-white/75 tracking-wider uppercase">
                {eyebrow}
              </span>
            </div>

            <h1
              id={id}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.06] tracking-tight break-words mb-6"
            >
              {title}
            </h1>

            <p className={`text-lg text-white/65 leading-relaxed mb-10 max-w-[540px] ${!showRight ? "mx-auto" : ""}`}>
              {description}
            </p>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-3 ${!showRight ? "justify-center" : ""}`}>
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0099CC] hover:bg-[#33B5E5] text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0099CC]/30 w-full sm:w-auto"
              >
                {primaryLabel} <ArrowRight size={16} />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 border border-white/25 text-white font-bold py-4 px-8 rounded-full transition-all hover:bg-white/20 hover:border-white/50 w-full sm:w-auto"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          {showRight && (
            <div className="hidden lg:flex items-center justify-center">
              {rightSlot ?? (
                characterSrc && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={characterSrc}
                    alt={characterAlt}
                    className="w-full max-w-[380px] h-auto drop-shadow-2xl animate-float"
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
