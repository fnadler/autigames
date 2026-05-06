import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showAppButtons?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Comece hoje. Sua criança merece.",
  subtitle = "Baixe gratuitamente o aplicativo e descubra como pequenos momentos de jogo podem transformar grandes habilidades.",
  showAppButtons = true,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden gradient-hero-bg py-16 sm:py-28"
      id="baixar-app"
      aria-labelledby="cta-title"
    >
      {/* Grid overlay */}
      <div className="hero-grid-overlay" style={{ opacity: .5 }} aria-hidden="true" />

      {/* Orbs */}
      <div className="orb-base orb-1" style={{ opacity: .5 }} aria-hidden="true" />
      <div className="orb-base orb-2" style={{ opacity: .5 }} aria-hidden="true" />

      {/* Puzzle deco */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/puzzle/puzzle-blue.png"
        alt=""
        aria-hidden="true"
        className="absolute left-[3%] top-[15%] w-20 opacity-25 puzzle-deco"
        style={{ animation: "auti-float-slow 9s ease-in-out infinite" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/puzzle/puzzle-purple.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[4%] bottom-[18%] w-24 opacity-20 puzzle-deco"
        style={{ animation: "auti-float-slow 11s ease-in-out infinite", animationDelay: "3s" }}
      />

      {/* Floating characters */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/personagens/personagem-2.png"
        alt=""
        aria-hidden="true"
        className="cta-char-l hidden sm:block"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/personagens/personagem-3.png"
        alt=""
        aria-hidden="true"
        className="cta-char-r hidden sm:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-title"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5"
        >
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12">{subtitle}</p>

        {showAppButtons ? (
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-6">
            <a
              href="https://apps.apple.com/br/app/autigames/id6745478515"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#1A2233] py-3.5 px-6.5 rounded-[16px] hover:shadow-lg transition-all hover:-translate-y-1 shadow-md group"
              aria-label="Baixar na App Store"
            >
              <svg className="w-[26px] h-[26px] fill-[#1A2233]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[10px] font-normal text-[#64748b] opacity-60">Disponível na</span>
                <span className="block text-[15px] font-bold">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=br.com.autigames.autigames&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#1A2233] py-3.5 px-6.5 rounded-[16px] hover:shadow-lg transition-all hover:-translate-y-1 shadow-md group"
              aria-label="Baixar no Google Play"
            >
              <svg className="w-6 h-6 fill-[#3DAA6B]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[10px] font-normal text-[#64748b] opacity-60">Disponível no</span>
                <span className="block text-[15px] font-bold">Google Play</span>
              </div>
            </a>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryLabel && primaryHref && (
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0099CC] hover:bg-white/90 font-bold py-4 px-10 rounded-2xl text-base shadow-2xl transition-all hover:-translate-y-0.5"
              >
                {primaryLabel} <ArrowRight size={16} />
              </Link>
            )}
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-bold py-4 px-10 rounded-2xl text-base transition-all"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
