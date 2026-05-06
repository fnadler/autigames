import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Phone, Mail } from "lucide-react";

function LinkedInIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-[#1A1A1A] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-autigames.svg"
                alt="Autigames"
                className="h-10 lg:h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/autigames"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0099CC] rounded-lg flex items-center justify-center transition-colors"
                aria-label={t("instagramAria")}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/autigames/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0099CC] rounded-lg flex items-center justify-center transition-colors"
                aria-label={t("linkedinAria")}
              >
                <LinkedInIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Para você */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#9A9A9A] mb-5">
              {t("forYou")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/para-pais" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.forParents")}
                </Link>
              </li>
              <li>
                <Link href="/para-profissionais" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.forProfessionals")}
                </Link>
              </li>
              <li>
                <Link href="/para-empresas" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.forCompanies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Autigames */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#9A9A9A] mb-5">
              {t("autigames")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link href="/jogos" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.games")}
                </Link>
              </li>
              <li>
                <a href="https://blog.autigames.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.blog")}
                </a>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-[#C4C4C4] hover:text-white transition-colors">
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contato */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#9A9A9A] mb-5">
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5551992600843"
                  className="flex items-center gap-2 text-sm text-[#C4C4C4] hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-[#0099CC] flex-shrink-0" />
                  (51) 99260-0843
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@autigames.com.br"
                  className="flex items-center gap-2 text-sm text-[#C4C4C4] hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-[#0099CC] flex-shrink-0" />
                  contato@autigames.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/autigames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#C4C4C4] hover:text-white transition-colors"
                >
                  <InstagramIcon size={14} className="text-[#0099CC] flex-shrink-0" />
                  @autigames
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-4">

          {/* Copyright */}
          <p className="text-xs text-[#6B6B6B] text-center md:text-left">
            © {new Date().getFullYear()} Autigames. {t("rights")}
          </p>

          {/* Links + logos */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">

            {/* Text links */}
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <Link
                href="/termos-de-uso-e-privacidade"
                className="text-xs text-[#6B6B6B] hover:text-white transition-colors"
              >
                {t("legalLink")}
              </Link>
              <span className="text-xs text-[#6B6B6B] inline-flex items-center gap-2">
                {t("tech")}
                <a
                  href="https://longviewhealth.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo-longview-negative.svg" alt="LongView Health" className="h-4 w-auto" />
                </a>
              </span>
            </div>

            {/* Divider — visible only on desktop */}
            <div className="hidden md:block h-4 w-px bg-white/20" />

            {/* Partner logos */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6B6B6B] shrink-0">{t("partnersLabel")}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo_ufrgs.png" alt="UFRGS" className="w-[76px] h-auto bg-white rounded px-1.5 py-1" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo_startse-hcpa.png" alt="Pré-incubação StartSe HCPA" className="w-[76px] h-auto bg-white rounded px-1.5 py-1" />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
