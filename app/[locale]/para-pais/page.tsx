import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ShieldCheck, CheckCircle, Clock, Smartphone, ChevronDown, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "paraPais.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/para-pais" },
  };
}

const stepColors = [
  "from-[#0099CC] to-[#8B5CF6]",
  "from-[#8B5CF6] to-[#E53935]",
  "from-[#3DAA6B] to-[#0099CC]",
];
const credentialIcons = [ShieldCheck, CheckCircle, Clock, Smartphone];
const credentialColors = ["icon-blue", "icon-green", "icon-lilac", "icon-yellow"];

export default async function ParaPaisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "paraPais" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const steps = [
    { number: "01", title: t("steps.s0title"), description: t("steps.s0desc"), color: stepColors[0] },
    { number: "02", title: t("steps.s1title"), description: t("steps.s1desc"), color: stepColors[1] },
    { number: "03", title: t("steps.s2title"), description: t("steps.s2desc"), color: stepColors[2] },
  ];

  const credentials = [
    t("credentials.c0"),
    t("credentials.c1"),
    t("credentials.c2"),
    t("credentials.c3"),
  ];

  const faqs = [
    { q: t("faq.q0"), a: t("faq.a0") },
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden gradient-hero-bg pt-12 lg:pt-16 pb-12 lg:pb-16" aria-labelledby="pais-hero-title">
          <div className="hero-grid-overlay" aria-hidden="true" />
          <div className="orb-base orb-1" aria-hidden="true" />
          <div className="orb-base orb-2" aria-hidden="true" />
          <div className="container-default relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex w-fit max-w-full items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/7 backdrop-blur-sm mb-6">
                  <span className="badge-dot" aria-hidden="true" />
                  <span className="text-xs font-bold text-white/75 tracking-wider uppercase">{t("hero.badge")}</span>
                </div>
                <h1 id="pais-hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.06] tracking-tight break-words mb-6">
                  {t("hero.title")} <span className="text-rainbow">{t("hero.titleHighlight")}</span>
                </h1>
                <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-[540px]">
                  {t("hero.description")}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href="https://apps.apple.com/br/app/autigames/id6745478515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 border-[1.5px] border-white/25 backdrop-blur-md text-white rounded-[16px] py-3 px-[22px] transition-all hover:bg-white/20 hover:border-white/60 hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="block text-[10px] font-normal opacity-70">{tCommon("downloadOn")}</span>
                      <span className="block text-[14px] font-bold">{tCommon("appStore")}</span>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.autigames.autigames&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 border-[1.5px] border-white/25 backdrop-blur-md text-white rounded-[16px] py-3 px-[22px] transition-all hover:bg-white/20 hover:border-white/60 hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="block text-[10px] font-normal opacity-70">{tCommon("availableOn")}</span>
                      <span className="block text-[14px] font-bold">{tCommon("googlePlay")}</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/personagens/personagem-2.png" alt="Personagem Sofia" className="w-full max-w-[380px] h-auto drop-shadow-2xl animate-float" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTEXTO ── */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="context-title">
          <div className="container-default">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="section-eyebrow">{t("context.eyebrow")}</span>
                <h2 id="context-title" className="text-4xl font-extrabold text-[#1A2233] mb-6 mt-3">
                  {t("context.title")}
                </h2>
                <p className="text-lg text-[#64748b] leading-relaxed">{t("context.desc")}</p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="como-funciona" className="section-padding gradient-section-bg" aria-labelledby="steps-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("steps.eyebrow")}</span>
              <h2 id="steps-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("steps.title")}
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <SectionReveal key={step.number} delay={i * 100}>
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-extrabold text-xl shadow-lg`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2233] mb-3">{step.title}</h3>
                    <p className="text-[#64748b] leading-relaxed">{step.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CREDENCIAIS ── */}
        <section className="section-padding bg-white" aria-labelledby="credentials-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <h2 id="credentials-title" className="text-4xl font-extrabold text-[#1A2233] mb-4">
                {t("credentials.title")}
              </h2>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {credentials.map((label, i) => {
                const Icon = credentialIcons[i];
                return (
                  <SectionReveal key={label} delay={i * 80}>
                    <div className="bg-[#F8FAFC] rounded-[24px] p-7 border border-[#E5E5E5] flex flex-col items-center text-center gap-4 skill-card">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${credentialColors[i]}`}>
                        <Icon size={24} />
                      </div>
                      <p className="font-semibold text-[#1A2233] text-sm leading-snug">{label}</p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PRIVACIDADE ── */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="privacy-title">
          <div className="container-default">
            <SectionReveal>
              <div className="bg-gradient-to-br from-[#E8F6FD] to-[#EDE9FE] rounded-[32px] p-10 md:p-14 max-w-3xl mx-auto text-center border border-[#0099CC]/10">
                <div className="w-16 h-16 bg-[#0099CC] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0099CC]/30">
                  <ShieldCheck size={28} className="text-white" />
                </div>
                <h2 id="privacy-title" className="text-3xl font-extrabold text-[#1A2233] mb-4">
                  {t("privacy.title")}
                </h2>
                <p className="text-[#64748b] leading-relaxed text-base">{t("privacy.desc")}</p>
                <Link
                  href="/termos-de-uso-e-privacidade"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#0099CC] hover:underline"
                >
                  {t("privacy.link")} <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-white" aria-labelledby="faq-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("faq.eyebrow")}</span>
              <h2 id="faq-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("faq.title")}
              </h2>
            </SectionReveal>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <SectionReveal key={i} delay={i * 60}>
                  <details className="bg-[#F8FAFC] rounded-[20px] border border-[#E5E5E5] group overflow-hidden">
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-[#1A2233] gap-4 hover:bg-[#EEF5FF] transition-colors">
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className="text-[#0099CC] flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-[#64748b] leading-relaxed text-sm border-t border-[#E5E5E5] pt-4">
                      {faq.a}
                    </div>
                  </details>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection title={t("cta.title")} subtitle={t("cta.subtitle")} />
      </main>
      <Footer />
    </>
  );
}
