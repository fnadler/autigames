"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const locales = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");

  const navLinks = [
    { label: t("forParents"), href: "/para-pais" },
    { label: t("forProfessionals"), href: "/para-profissionais" },
    { label: t("forCompanies"), href: "/para-empresas" },
    { label: t("games"), href: "/jogos" },
    { label: t("about"), href: "/sobre" },
    { label: t("blog"), href: "https://blog.autigames.com.br/", external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(next: string) {
    router.push(pathname, { locale: next });
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-autigames.svg"
              alt="Autigames"
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = !link.external && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")));
              const className = `text-sm font-semibold transition-colors ${isActive ? "text-[#0099CC] font-bold" : "text-[#4A4A4A] hover:text-[#0099CC]"}`;
              return link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + language switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-0.5 border border-[#E5E5E5] rounded-full px-1 py-1">
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all ${
                    locale === loc.code
                      ? "bg-[#0099CC] text-white"
                      : "text-[#4A4A4A] hover:text-[#0099CC]"
                  }`}
                  aria-label={`${t("lang")}: ${loc.label}`}
                  aria-pressed={locale === loc.code}
                >
                  {loc.label}
                </button>
              ))}
            </div>

            <Link
              href="#baixar-app"
              className="inline-flex items-center gap-2 text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-[13px] px-[22px] py-[10px] shadow-[0_4px_16px_rgba(0,153,204,0.35)] hover:shadow-[0_8px_24px_rgba(0,153,204,0.5)]"
              style={{ background: "linear-gradient(135deg, #0099CC 0%, #8B5CF6 100%)", fontFamily: "var(--font-quicksand)" }}
            >
              <Smartphone size={16} />
              {t("downloadApp")}
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              render={
                <button
                  className="lg:hidden p-2 text-[#1A1A1A] focus-visible:outline-2 focus-visible:outline-[#0099CC] rounded-lg"
                  aria-label={t("openMenu")}
                >
                  <Menu size={24} />
                </button>
              }
            />
            <SheetContent side="right" className="w-80 pt-8" showCloseButton={false}>
              <div className="flex flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo-autigames.svg"
                      alt="Autigames"
                      className="h-10 w-auto"
                    />
                  </Link>
                  <SheetClose
                    render={
                      <button className="p-1 text-[#6B6B6B] hover:text-[#1A1A1A]" aria-label={t("closeMenu")}>
                        <X size={20} />
                      </button>
                    }
                  />
                </div>
                <nav className="flex flex-col gap-1" aria-label="Menu mobile">
                  {navLinks.map((link) => {
                    const isActive = !link.external && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")));
                    const className = `px-3 py-3 text-base font-semibold rounded-xl transition-colors ${isActive ? "text-[#0099CC] bg-[#F0F8FF]" : "text-[#1A1A1A] hover:text-[#0099CC] hover:bg-[#F0F8FF]"}`;
                    return link.external ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className={className}>
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile language switcher */}
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-[#6B6B6B]" />
                  <div className="flex items-center gap-0.5 border border-[#E5E5E5] rounded-full px-1 py-1">
                    {locales.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => switchLocale(loc.code)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all ${
                          locale === loc.code
                            ? "bg-[#0099CC] text-white"
                            : "text-[#4A4A4A] hover:text-[#0099CC]"
                        }`}
                        aria-pressed={locale === loc.code}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Link
                  href="#baixar-app"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-[13px] px-[22px] py-[12px] shadow-[0_4px_16px_rgba(0,153,204,0.35)] hover:shadow-[0_8px_24px_rgba(0,153,204,0.5)] w-full"
                  style={{ background: "linear-gradient(135deg, #0099CC 0%, #8B5CF6 100%)", fontFamily: "var(--font-quicksand)" }}
                >
                  <Smartphone size={18} />
                  {t("downloadAppFull")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
