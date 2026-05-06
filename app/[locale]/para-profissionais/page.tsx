import type { Metadata } from "next";
import { FlaskConical, BarChart2, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkHero } from "@/components/sections/DarkHero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { LeadFormProfissional } from "@/components/forms/LeadFormProfissional";
import teamData from "@/content/team.json";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "paraProfissionais.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/para-profissionais" },
  };
}

const benefitIcons = [FlaskConical, BarChart2, Clock];
const benefitIconClasses = ["icon-blue", "icon-lilac", "icon-green"];

const metrics = [
  { label: "Reconhecimento de Emoções", value: 100 },
  { label: "Comunicação",              value: 93  },
  { label: "Empatia",                  value: 100 },
  { label: "Reciprocidade Social",     value: 87  },
];

export default async function ParaProfissionaisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "paraProfissionais" });

  const benefits = [
    { title: t("benefits.b0title"), description: t("benefits.b0desc") },
    { title: t("benefits.b1title"), description: t("benefits.b1desc") },
    { title: t("benefits.b2title"), description: t("benefits.b2desc") },
  ];

  const useCases = [
    { emoji: t("useCases.u0emoji"), title: t("useCases.u0title"), description: t("useCases.u0desc") },
    { emoji: t("useCases.u1emoji"), title: t("useCases.u1title"), description: t("useCases.u1desc") },
    { emoji: t("useCases.u2emoji"), title: t("useCases.u2title"), description: t("useCases.u2desc") },
  ];

  const metricsLabels = [
    t("metrics.m0"),
    t("metrics.m1"),
    t("metrics.m2"),
    t("metrics.m3"),
  ];

  return (
    <>
      <Header />
      <main>

        <DarkHero
          id="prof-hero-title"
          eyebrow={t("hero.eyebrow")}
          title={
            <>
              {t("hero.title")}{" "}
              <span className="text-rainbow">{t("hero.titleHighlight")}</span>
            </>
          }
          description={t("hero.description")}
          primaryLabel={t("hero.primaryLabel")}
          primaryHref="#formulario"
          secondaryLabel={t("hero.secondaryLabel")}
          secondaryHref="https://wa.me/5551992600843"
          characterSrc="/images/personagens/personagem-1.png"
          characterAlt="Personagem Autigames — para profissionais"
        />

        {/* ── BENEFÍCIOS ── */}
        <section className="section-padding bg-white" aria-labelledby="benefits-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("benefits.eyebrow")}</span>
              <h2 id="benefits-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("benefits.title")}
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => {
                const Icon = benefitIcons[i];
                return (
                  <SectionReveal key={b.title} delay={i * 100}>
                    <div className="text-center bg-[#F8FAFC] rounded-[24px] p-8 border border-[#E5E5E5] skill-card">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${benefitIconClasses[i]}`}>
                        <Icon size={26} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A2233] mb-3">{b.title}</h3>
                      <p className="text-[#64748b] leading-relaxed">{b.description}</p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CASOS DE USO ── */}
        <section className="section-padding gradient-section-bg" aria-labelledby="cases-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("useCases.eyebrow")}</span>
              <h2 id="cases-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("useCases.title")}
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <SectionReveal key={uc.title} delay={i * 100} className="h-full">
                  <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className="text-4xl mb-5" aria-hidden="true">{uc.emoji}</div>
                    <h3 className="text-xl font-bold text-[#1A2233] mb-3 tracking-tight">{uc.title}</h3>
                    <p className="text-[#64748b] leading-relaxed flex-1">{uc.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDICADORES ── */}
        <section className="section-padding bg-white" aria-labelledby="metrics-title">
          <div className="container-default">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SectionReveal>
                <span className="section-eyebrow">{t("metrics.eyebrow")}</span>
                <h2 id="metrics-title" className="text-4xl font-extrabold text-[#1A2233] mb-5 mt-3">
                  {t("metrics.title")}
                </h2>
                <p className="text-lg text-[#64748b] leading-relaxed">{t("metrics.desc")}</p>
              </SectionReveal>
              <SectionReveal delay={100}>
                <div className="bg-[#F8FAFC] rounded-[28px] p-8 border border-[#E5E5E5]">
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#64748b] mb-7">
                    {t("metrics.panelTitle")}
                  </p>
                  <div className="space-y-6">
                    {metrics.map((m, i) => (
                      <div key={m.label}>
                        <div className="flex justify-between mb-2.5">
                          <span className="text-sm font-semibold text-[#1A2233]">{metricsLabels[i]}</span>
                          <span className="text-sm font-bold text-[#0099CC]">{m.value}%</span>
                        </div>
                        <div className="h-2.5 bg-[#E5E5E5] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${m.value}%`, background: "linear-gradient(90deg, #0099CC, #8B5CF6)", transition: "width 1.2s ease", transitionDelay: `${i * 150}ms` }}
                            role="progressbar"
                            aria-valuenow={m.value}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={metricsLabels[i]}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── EQUIPE ── */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="team-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("team.eyebrow")}</span>
              <h2 id="team-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
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
                    <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{member.role}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMULÁRIO ── */}
        <section id="formulario" className="section-padding bg-white" aria-labelledby="form-title">
          <div className="container-default">
            <div className="max-w-2xl mx-auto">
              <SectionReveal className="text-center mb-10">
                <span className="section-eyebrow">{t("form.eyebrow")}</span>
                <h2 id="form-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                  {t("form.title")}
                </h2>
                <p className="text-lg text-[#64748b]">{t("form.desc")}</p>
              </SectionReveal>
              <div className="bg-[#F8FAFC] rounded-[28px] p-4 sm:p-6 md:p-10 border border-[#E5E5E5]">
                <LeadFormProfissional />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
