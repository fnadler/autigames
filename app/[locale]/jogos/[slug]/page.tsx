import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Users } from "lucide-react";
import gamesData from "@/content/games.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { CTASection } from "@/components/sections/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

interface GamePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    gamesData.map((game) => ({ locale, slug: game.slug }))
  );
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const game = gamesData.find((g) => g.slug === slug);
  if (!game) return {};
  const tContent = await getTranslations({ locale, namespace: `gamesContent.${slug}` as never });
  return {
    title: `${tContent("name")} — Autigames`,
    description: tContent("shortDescription"),
    alternates: { canonical: `/jogos/${slug}` },
  };
}

const statusConfig: Record<string, { color: string; dot: string }> = {
  launched:     { color: "bg-[#3DAA6B]/20 text-[#6ee7a0]", dot: "#3DAA6B" },
  homologation: { color: "bg-[#FFD700]/20 text-[#fde68a]", dot: "#FFD700" },
  development:  { color: "bg-[#8B5CF6]/20 text-[#c4b5fd]", dot: "#8B5CF6" },
};

const skillColors = [
  "bg-[#0099CC]/10 text-[#0099CC]",
  "bg-[#8B5CF6]/10 text-[#8B5CF6]",
  "bg-[#3DAA6B]/10 text-[#3DAA6B]",
  "bg-[#E53935]/10 text-[#E53935]",
  "bg-[#FFD700]/10 text-[#C9950C]",
];

export default async function GamePage({ params }: GamePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const game = gamesData.find((g) => g.slug === slug);
  if (!game) notFound();

  const t = await getTranslations({ locale, namespace: "game" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tContent = await getTranslations({ locale, namespace: `gamesContent.${slug}` as never });

  const status = statusConfig[game.status] ?? statusConfig.development;

  const skills = [tContent("skill0"), tContent("skill1"), tContent("skill2")].filter(Boolean);
  const steps = [
    { step: 1, title: tContent("step0title"), description: tContent("step0desc") },
    { step: 2, title: tContent("step1title"), description: tContent("step1desc") },
    { step: 3, title: tContent("step2title"), description: tContent("step2desc") },
  ];

  const statusLabel = tContent("statusLabel");
  const gameName = tContent("name");
  const gameDesc = tContent("description");
  const gameShortDesc = tContent("shortDescription");

  return (
    <>
      <Header />
      <main>

        {/* ── DARK HERO ── */}
        <section className="gradient-hero-bg relative overflow-hidden pt-8 pb-20" aria-labelledby="game-title">
          <div className="hero-grid-overlay" aria-hidden="true" />
          <div className="orb-base orb-1" style={{ opacity: .5 }} aria-hidden="true" />
          <div className="orb-base orb-2" style={{ opacity: .35 }} aria-hidden="true" />
          <div className="puzzle-deco puzzle-a" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/puzzle/puzzle-blue.png" alt="" />
          </div>
          <div className="puzzle-deco puzzle-c" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/puzzle/puzzle-purple.png" alt="" />
          </div>

          <div className="container-default relative z-10">
            <Link
              href="/jogos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> {tCommon("backToGames")}
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: status.dot, boxShadow: `0 0 8px ${status.dot}` }}
                    aria-hidden="true"
                  />
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${status.color}`}>
                    {statusLabel}
                  </span>
                </div>

                <h1 id="game-title" className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  {gameName}
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-6">{gameDesc}</p>
                <div className="flex items-center gap-2 mb-8 text-sm font-semibold text-white/50">
                  <Users size={16} className="text-[#0099CC]" />
                  {t("recommendedAge")} {game.ageRange}
                </div>

                {game.status === "launched" && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://apps.apple.com/br/app/autigames/id6745478515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-[#1A2233] py-3.5 px-[26px] rounded-[16px] hover:shadow-lg transition-all hover:-translate-y-1 shadow-md"
                      aria-label={`${tCommon("downloadOn")} ${tCommon("appStore")}`}
                    >
                      <svg className="w-[26px] h-[26px] fill-[#1A2233]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                      <div className="text-left leading-tight">
                        <span className="block text-[10px] font-normal text-[#64748b] opacity-60">{tCommon("downloadOn")}</span>
                        <span className="block text-[15px] font-bold">{tCommon("appStore")}</span>
                      </div>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=br.com.autigames.autigames&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-[#1A2233] py-3.5 px-[26px] rounded-[16px] hover:shadow-lg transition-all hover:-translate-y-1 shadow-md"
                      aria-label={`${tCommon("availableOn")} ${tCommon("googlePlay")}`}
                    >
                      <svg className="w-6 h-6 fill-[#3DAA6B]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                      </svg>
                      <div className="text-left leading-tight">
                        <span className="block text-[10px] font-normal text-[#64748b] opacity-60">{tCommon("availableOn")}</span>
                        <span className="block text-[15px] font-bold">{tCommon("googlePlay")}</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center">
                <div className="glass-card w-full max-w-sm p-8 flex flex-col items-center gap-5">
                  <div className="text-7xl" aria-hidden="true">🎮</div>
                  <p className="font-bold text-white text-lg">{gameName}</p>
                  <div className="w-full grid grid-cols-3 gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="bg-white/10 text-white/80 text-xs font-semibold px-2 py-1.5 rounded-lg text-center">
                        {skill.split(" ")[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section className="section-padding bg-white" aria-labelledby="skills-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-10">
              <span className="section-eyebrow">{t("skillsEyebrow")}</span>
              <h2 id="skills-title" className="text-3xl font-extrabold text-[#1A2233] mt-3">
                {t("skillsTitle")}
              </h2>
            </SectionReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, i) => (
                <SectionReveal key={skill} delay={i * 80}>
                  <div className={`rounded-[16px] px-6 py-4 text-center font-bold text-sm ${skillColors[i % skillColors.length]}`}>
                    {skill}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="section-padding gradient-section-bg" aria-labelledby="how-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-12">
              <span className="section-eyebrow">{t("howItWorksEyebrow")}</span>
              <h2 id="how-title" className="text-3xl font-extrabold text-[#1A2233] mt-3">
                {t("howItWorksTitle")}
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <SectionReveal key={step.step} delay={i * 100} className="h-full">
                  <div className="text-center bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-extrabold text-xl shadow-lg shadow-blue-500/20"
                      style={{ background: "linear-gradient(135deg, #0099CC, #8B5CF6)" }}
                    >
                      {String(step.step).padStart(2, "0")}
                    </div>
                    <h3 className="font-bold text-[#1A2233] mb-3 text-lg tracking-tight leading-tight">{step.title}</h3>
                    <p className="text-[#64748b] leading-relaxed text-[15px] flex-1">{step.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={game.status === "launched" ? t("ctaLaunched") : t("ctaComingSoon")}
          subtitle={
            game.status === "launched"
              ? `${gameName} — ${gameShortDesc}`
              : t("ctaComingSoonSubtitle")
          }
        />
      </main>
      <Footer />
    </>
  );
}
