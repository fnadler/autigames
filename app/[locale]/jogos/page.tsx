import type { Metadata } from "next";
import gamesData from "@/content/games.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkHero } from "@/components/sections/DarkHero";
import { GameCard } from "@/components/sections/GameCard";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { CTASection } from "@/components/sections/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/jogos" },
  };
}

export default async function JogosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "games" });

  const launched     = gamesData.filter((g) => g.status === "launched");
  const homologation = gamesData.filter((g) => g.status === "homologation");
  const development  = gamesData.filter((g) => g.status === "development");

  return (
    <>
      <Header />
      <main>

        <DarkHero
          id="jogos-title"
          eyebrow={t("hero.eyebrow")}
          title={
            <>
              {t("hero.title")}{" "}
              <span className="text-rainbow">{t("hero.titleHighlight")}</span>
            </>
          }
          description={t("hero.description")}
          primaryLabel={t("hero.primaryLabel")}
          primaryHref="#lancados"
          secondaryLabel={t("hero.secondaryLabel")}
          secondaryHref="#desenvolvimento"
        />

        {launched.length > 0 && (
          <section id="lancados" className="section-padding bg-white" aria-labelledby="launched-title">
            <div className="container-default">
              <SectionReveal className="mb-10">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-3 h-3 bg-[#3DAA6B] rounded-full shadow-sm shadow-[#3DAA6B]/60" aria-hidden="true" />
                  <h2 id="launched-title" className="text-3xl font-extrabold text-[#1A2233]">{t("launched")}</h2>
                </div>
              </SectionReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {launched.map((game, i) => (
                  <SectionReveal key={game.slug} delay={i * 80}>
                    <GameCard {...game} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {homologation.length > 0 && (
          <section className="section-padding bg-[#F8FAFC]" aria-labelledby="homologation-title">
            <div className="container-default">
              <SectionReveal className="mb-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#FFD700] rounded-full shadow-sm shadow-[#FFD700]/60" aria-hidden="true" />
                  <h2 id="homologation-title" className="text-3xl font-extrabold text-[#1A2233]">{t("homologation")}</h2>
                </div>
              </SectionReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {homologation.map((game, i) => (
                  <SectionReveal key={game.slug} delay={i * 80}>
                    <GameCard {...game} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {development.length > 0 && (
          <section id="desenvolvimento" className="section-padding bg-white" aria-labelledby="development-title">
            <div className="container-default">
              <SectionReveal className="mb-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#8B5CF6] rounded-full shadow-sm shadow-[#8B5CF6]/60" aria-hidden="true" />
                  <h2 id="development-title" className="text-3xl font-extrabold text-[#1A2233]">{t("development")}</h2>
                </div>
              </SectionReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {development.map((game, i) => (
                  <SectionReveal key={game.slug} delay={i * 80}>
                    <GameCard {...game} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection title={t("cta.title")} subtitle={t("cta.subtitle")} />
      </main>
      <Footer />
    </>
  );
}
