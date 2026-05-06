import type { Metadata } from "next";
import teamData from "@/content/team.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { DarkHero } from "@/components/sections/DarkHero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sobre.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/sobre" },
  };
}

const council = [{ name: "Daniel Ely", role: "Conselheiro Estratégico", image: "/images/equipe/daniel-ely.png" }];

export default async function SobrePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "sobre" });

  return (
    <>
      <Header />
      <main>

        <DarkHero
          id="sobre-title"
          eyebrow={t("hero.eyebrow")}
          title={
            <>
              {t("hero.title")}{" "}
              <span className="text-rainbow">{t("hero.titleHighlight")}</span>
            </>
          }
          description={t("hero.description")}
          primaryLabel={t("hero.primaryLabel")}
          primaryHref="#equipe"
          secondaryLabel={t("hero.secondaryLabel")}
          secondaryHref="#historia"
          characterSrc="/images/personagens/sofia/feliz.png"
          characterAlt="Personagem Autigames — Sofia"
        />

        {/* ── NOSSA HISTÓRIA ── */}
        <section id="historia" className="section-padding bg-white" aria-labelledby="historia-title">
          <div className="container-default">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <span className="section-eyebrow">{t("historia.eyebrow")}</span>
                <h2 id="historia-title" className="text-4xl font-extrabold text-[#1A2233] mb-7 mt-3">
                  {t("historia.title")}
                </h2>
                <div className="space-y-6 text-lg text-[#64748b] leading-relaxed">
                  <p>{t("historia.p1")}</p>
                  <p>{t("historia.p2")}</p>
                  <p>{t("historia.p3")}</p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── EQUIPE CIENTÍFICA ── */}
        <section id="equipe" className="section-padding bg-[#F8FAFC]" aria-labelledby="equipe-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("team.eyebrow")}</span>
              <h2 id="equipe-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("team.title")}
              </h2>
              <p className="text-lg text-[#64748b] max-w-2xl mx-auto">{t("team.desc")}</p>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.map((member, i) => (
                <SectionReveal key={member.name} delay={i * 80} className="h-full">
                  <div className="bg-white rounded-[32px] p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center">
                    <div
                      className="w-24 h-24 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md"
                      style={{ background: "linear-gradient(135deg,rgba(0,153,204,0.1),rgba(139,92,246,0.1))" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-[#1A2233] mb-1.5 text-base tracking-tight leading-tight">{member.name}</h3>
                    <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-sm text-[#64748b] leading-relaxed flex-1">{member.bio}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSELHO ── */}
        <section className="section-padding bg-white" aria-labelledby="conselho-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-10">
              <span className="section-eyebrow">{t("council.eyebrow")}</span>
              <h2 id="conselho-title" className="text-3xl font-extrabold text-[#1A2233] mb-2 mt-3">
                {t("council.title")}
              </h2>
            </SectionReveal>
            <div className="flex justify-center">
              {council.map((member) => (
                <SectionReveal key={member.name}>
                  <div className="bg-[#F8FAFC] rounded-[32px] p-10 text-center max-w-xs shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center">
                    <div
                      className="w-24 h-24 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md"
                      style={{ background: "linear-gradient(135deg,rgba(0,153,204,0.1),rgba(139,92,246,0.1))" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-[#1A2233] mb-1.5 text-base tracking-tight leading-tight">{member.name}</h3>
                    <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{member.role}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECNOLOGIA ── */}
        <section className="section-padding gradient-section-bg" aria-labelledby="tech-title">
          <div className="container-default">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <div className="bg-white rounded-[28px] p-10 md:p-14 border border-[#E5E5E5] text-center">
                  <p className="section-eyebrow mb-4">{t("tech.eyebrow")}</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo-longview.svg" alt="LongView Health" className="h-10 w-auto mx-auto mb-6" />
                  <p className="text-[#64748b] leading-relaxed text-base">{t("tech.text")}</p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── PARCEIROS INSTITUCIONAIS ── */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="parceiros-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-12">
              <span className="section-eyebrow">{t("partners.eyebrow")}</span>
              <h2 id="parceiros-title" className="text-3xl font-extrabold text-[#1A2233] mt-3">
                {t("partners.title")}
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <SectionReveal delay={0} className="h-full">
                <div className="bg-white rounded-[32px] p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-center text-center h-full hover:shadow-md transition-all duration-300">
                  <div className="h-20 flex items-center justify-center mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo_ufrgs.png" alt={t("partners.ufrgsName")} className="h-16 w-auto object-contain" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm font-bold text-[#1A2233] leading-tight mb-2 px-2">{t("partners.ufrgsName")}</p>
                    <p className="text-xs text-[#64748b] font-medium">{t("partners.ufrgsRole")}</p>
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal delay={80} className="h-full">
                <div className="bg-white rounded-[32px] p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-center text-center h-full hover:shadow-md transition-all duration-300">
                  <div className="h-20 flex items-center justify-center mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo_startse-hcpa.png" alt={t("partners.hcpaName")} className="h-16 w-auto object-contain" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm font-bold text-[#1A2233] leading-tight mb-2 px-2">{t("partners.hcpaName")}</p>
                    <p className="text-xs text-[#64748b] font-medium">{t("partners.hcpaRole")}</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── MANIFESTO ── */}
        <section className="gradient-hero-bg relative overflow-hidden py-24" aria-label="Manifesto Autigames">
          <div className="hero-grid-overlay" style={{ opacity: .4 }} aria-hidden="true" />
          <div className="orb-base orb-1" style={{ opacity: .4 }} aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <SectionReveal>
              <blockquote>
                <p className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  {t("manifesto.quote")}
                </p>
                <footer className="mt-6 text-white/60 font-semibold tracking-wider text-sm uppercase">
                  {t("manifesto.footer")}
                </footer>
              </blockquote>
            </SectionReveal>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
