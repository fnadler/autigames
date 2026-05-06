import type { Metadata } from "next";
import { TrendingUp, Star, BarChart2, Heart, Megaphone, Globe, Building2, Puzzle, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkHero } from "@/components/sections/DarkHero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { LeadFormEmpresa } from "@/components/forms/LeadFormEmpresa";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "paraEmpresas.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/para-empresas" },
  };
}

const gainIcons = [TrendingUp, Star, BarChart2, Heart, Megaphone, Globe];
const modelIcons = [Building2, Puzzle, Users];

export default async function ParaEmpresasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "paraEmpresas" });

  const gains = [
    { title: t("gains.g0title"), description: t("gains.g0desc") },
    { title: t("gains.g1title"), description: t("gains.g1desc") },
    { title: t("gains.g2title"), description: t("gains.g2desc") },
    { title: t("gains.g3title"), description: t("gains.g3desc") },
    { title: t("gains.g4title"), description: t("gains.g4desc") },
    { title: t("gains.g5title"), description: t("gains.g5desc") },
  ];

  const models = [
    { title: t("models.m0title"), description: t("models.m0desc") },
    { title: t("models.m1title"), description: t("models.m1desc") },
    { title: t("models.m2title"), description: t("models.m2desc") },
  ];

  const cocriacaoSteps = [
    t("cocriacao.step0"),
    t("cocriacao.step1"),
    t("cocriacao.step2"),
    t("cocriacao.step3"),
    t("cocriacao.step4"),
    t("cocriacao.step5"),
    t("cocriacao.step6"),
    t("cocriacao.step7"),
  ];

  return (
    <>
      <Header />
      <main>

        <DarkHero
          id="emp-hero-title"
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
          secondaryHref="#modelos"
          characterSrc="/images/personagens/personagem-3.png"
          characterAlt="Personagem Autigames — para empresas"
        />

        {/* ── GANHOS ── */}
        <section className="section-padding bg-white" aria-labelledby="gains-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("gains.eyebrow")}</span>
              <h2 id="gains-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("gains.title")}
              </h2>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gains.map((gain, i) => {
                const Icon = gainIcons[i];
                return (
                  <SectionReveal key={gain.title} delay={i * 80}>
                    <div className="flex gap-4 p-6 rounded-[20px] border border-[#E5E5E5] hover:border-[#3DAA6B] hover:shadow-md transition-all diff-item">
                      <div className="w-12 h-12 min-w-12 bg-[#3DAA6B]/10 text-[#3DAA6B] rounded-2xl flex items-center justify-center mt-0.5">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A2233] mb-1.5">{gain.title}</h3>
                        <p className="text-sm text-[#64748b] leading-relaxed">{gain.description}</p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── MODELOS ── */}
        <section id="modelos" className="section-padding gradient-section-bg" aria-labelledby="models-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("models.eyebrow")}</span>
              <h2 id="models-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                {t("models.title")}
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {models.map((model, i) => {
                const Icon = modelIcons[i];
                return (
                  <SectionReveal key={model.title} delay={i * 100} className="h-full">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                      <div className="w-14 h-14 bg-[#3DAA6B]/10 text-[#3DAA6B] rounded-2xl flex items-center justify-center mb-5">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A2233] mb-3 tracking-tight">{model.title}</h3>
                      <p className="text-[#64748b] leading-relaxed flex-1">{model.description}</p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── COCRIAÇÃO ── */}
        <section className="section-padding bg-white" aria-labelledby="cocriacao-title">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <div className="bg-gradient-to-br from-[#F0FFFE] to-[#E0F5EB] rounded-[32px] p-10 md:p-14 border border-[#3DAA6B]/20">
                  <span className="section-eyebrow" style={{ color: "#3DAA6B" }}>{t("cocriacao.eyebrow")}</span>
                  <h2 id="cocriacao-title" className="text-3xl md:text-4xl font-extrabold text-[#1A2233] mb-5 mt-3">
                    {t("cocriacao.title")}
                  </h2>
                  <p className="text-lg text-[#64748b] leading-relaxed mb-8">{t("cocriacao.desc")}</p>
                  <ul className="space-y-3">
                    {cocriacaoSteps.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 min-w-5 bg-[#3DAA6B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg viewBox="0 0 10 8" fill="none" className="w-3 h-3">
                            <path d="M1 4l3 3L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[#64748b]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── FORMULÁRIO ── */}
        <section id="formulario" className="section-padding bg-white" aria-labelledby="emp-form-title">
          <div className="container-default">
            <div className="max-w-2xl mx-auto">
              <SectionReveal className="text-center mb-10">
                <span className="section-eyebrow">{t("form.eyebrow")}</span>
                <h2 id="emp-form-title" className="text-4xl font-extrabold text-[#1A2233] mb-4 mt-3">
                  {t("form.title")}
                </h2>
                <p className="text-lg text-[#64748b]">{t("form.desc")}</p>
              </SectionReveal>
              <div className="bg-[#F8FAFC] rounded-[28px] p-4 sm:p-6 md:p-10 border border-[#E5E5E5]">
                <LeadFormEmpresa />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
