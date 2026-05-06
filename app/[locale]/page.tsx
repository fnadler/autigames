import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  Heart,
  Stethoscope,
  Handshake,
  Brain,
  Eye,
  MessageCircle,
  Shuffle,
  Lightbulb,
  FlaskConical,
  Users,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { GameCard } from "@/components/sections/GameCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionReveal } from "@/components/sections/SectionReveal";
import gamesData from "@/content/games.json";
import teamData from "@/content/team.json";
import { HeroMockup } from "@/components/sections/HeroMockup";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/" },
  };
}

const skillIcons = [Heart, Eye, MessageCircle, Shuffle, Lightbulb];
const skillIconClasses = ["icon-red", "icon-blue", "icon-green", "icon-yellow", "icon-lilac"];
const diffIcons = [FlaskConical, Heart, Brain, MessageCircle, Users, Cpu];
const diffIconClasses = ["icon-blue", "icon-red", "icon-lilac", "icon-green", "icon-yellow", "icon-gold"];
const audienceIcons = [Heart, Stethoscope, Handshake];
const audienceAccents = ["aud-red", "aud-blue", "aud-green"];
const audienceHrefs = ["/para-pais", "/para-profissionais", "/para-empresas"];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const previewGames = gamesData.slice(0, 4);

  const stats = [
    { value: "+2.000", label: t("stats.s0label") },
    { value: "+80.000", label: t("stats.s1label") },
    { value: "+16 países", label: t("stats.s2label") },
    { value: t("stats.s3value"), label: t("stats.s3label") },
  ];

  const skills = [
    { title: t("skills.s0title"), description: t("skills.s0desc") },
    { title: t("skills.s1title"), description: t("skills.s1desc") },
    { title: t("skills.s2title"), description: t("skills.s2desc") },
    { title: t("skills.s3title"), description: t("skills.s3desc") },
    { title: t("skills.s4title"), description: t("skills.s4desc") },
  ];

  const differentials = [
    { title: t("differentials.d0title"), description: t("differentials.d0desc") },
    { title: t("differentials.d1title"), description: t("differentials.d1desc") },
    { title: t("differentials.d2title"), description: t("differentials.d2desc") },
    { title: t("differentials.d3title"), description: t("differentials.d3desc") },
    { title: t("differentials.d4title"), description: t("differentials.d4desc") },
    { title: t("differentials.d5title"), description: t("differentials.d5desc") },
  ];

  const audiences = [
    { title: t("audiences.aud0title"), description: t("audiences.aud0desc"), cta: t("audiences.aud0cta") },
    { title: t("audiences.aud1title"), description: t("audiences.aud1desc"), cta: t("audiences.aud1cta") },
    { title: t("audiences.aud2title"), description: t("audiences.aud2desc"), cta: t("audiences.aud2cta") },
  ];

  return (
    <>
      <Header />
      <main>

        {/* ══ HERO ══ */}
        <section
          className="relative overflow-hidden gradient-hero-bg flex items-center"
          style={{ minHeight: "calc(100vh - 80px)", padding: "80px 0" }}
          aria-labelledby="hero-title"
        >
          <div className="hero-grid-overlay" aria-hidden="true" />
          <div className="orb-base orb-1" aria-hidden="true" />
          <div className="orb-base orb-2" aria-hidden="true" />
          <div className="orb-base orb-3" aria-hidden="true" />
          <div className="orb-base orb-4" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="puzzle-deco puzzle-a" src="/images/puzzle/puzzle-blue.png"   alt="" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="puzzle-deco puzzle-b" src="/images/puzzle/puzzle-purple.png" alt="" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="puzzle-deco puzzle-c" src="/images/puzzle/puzzle-green.png"  alt="" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="puzzle-deco puzzle-d" src="/images/puzzle/puzzle-golden.png" alt="" aria-hidden="true" />

          <div className="container-default relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex w-fit max-w-full items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/7 backdrop-blur-sm mb-6 animate-fade-in">
                  <span className="badge-dot" aria-hidden="true" />
                  <span className="text-xs font-bold text-white/75 tracking-wider uppercase">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1
                  id="hero-title"
                  className="font-extrabold text-white leading-[1.2] tracking-tighter mb-6 animate-slide-up"
                  style={{ animationDelay: ".2s" }}
                >
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[2.5rem] xl:text-[3.1rem]">
                    {t("hero.title")}
                  </span>
                  <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-[3rem] xl:text-[3.75rem] text-rainbow">
                    {t("hero.titleHighlight")}
                  </span>
                </h1>

                <p
                  className="text-lg text-white/65 leading-relaxed mb-10 max-w-[500px] animate-slide-up"
                  style={{ animationDelay: ".35s" }}
                >
                  {t("hero.description")}
                </p>

                <div className="flex flex-wrap gap-3 mb-6 animate-slide-up" style={{ animationDelay: ".5s" }}>
                  <a
                    href="https://apps.apple.com/br/app/autigames/id6745478515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 border-[1.5px] border-white/25 backdrop-blur-md text-white rounded-[16px] py-3 px-[22px] transition-all hover:bg-white/20 hover:border-white/60 hover:-translate-y-1"
                    aria-label={`${tCommon("downloadOn")} ${tCommon("appStore")}`}
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
                    aria-label={`${tCommon("availableOn")} ${tCommon("googlePlay")}`}
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

                <Link
                  href="#como-funciona"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-[#FFD700] transition-colors animate-slide-up"
                  style={{ animationDelay: ".65s" }}
                >
                  {t("hero.gamesCTA")} <ArrowRight size={14} />
                </Link>
              </div>

              <div className="hidden lg:flex items-center justify-center animate-slide-up" style={{ animationDelay: ".4s" }}>
                <HeroMockup />
              </div>
            </div>
          </div>

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 text-[10px] tracking-widest uppercase animate-fade-in z-10" style={{ animationDelay: "1.5s" }}>
            <ArrowRight size={16} className="rotate-90" />
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section className="gradient-rainbow-bg py-14" aria-label="Números da Autigames">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-white/20">
              {stats.map((stat, i) => (
                <div key={stat.label} className={i % 2 !== 0 ? "border-l lg:border-l-0 border-white/20" : ""}>
                  <AnimatedCounter value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PARA QUEM É ══ */}
        <section className="section-padding bg-white" aria-labelledby="audiences-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <h2 id="audiences-title" className="text-4xl md:text-5xl font-extrabold text-[#1A2233] leading-tight tracking-tight mb-4">
                {t("audiences.title")}
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((audience, i) => {
                const Icon = audienceIcons[i];
                return (
                  <SectionReveal key={audience.title} delay={i * 100}>
                    <div className={`bg-white rounded-[32px] p-9 border-2 border-transparent flex flex-col h-full aud-card ${audienceAccents[i]}`}>
                      <div className="w-14 h-14 rounded-[18px] flex items-center justify-center mb-7 aud-icon">
                        <Icon size={26} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A2233] tracking-tight mb-4">{audience.title}</h3>
                      <p className="text-[#64748b] leading-relaxed flex-1 mb-8">{audience.description}</p>
                      <Link
                        href={audienceHrefs[i]}
                        className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full font-bold text-white text-sm aud-btn transition-all"
                      >
                        {audience.cta}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ COMO FUNCIONA ══ */}
        <section id="como-funciona" className="section-padding gradient-section-bg" aria-labelledby="skills-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("skills.eyebrow")}</span>
              <h2 id="skills-title" className="text-4xl md:text-5xl font-extrabold text-[#1A2233] tracking-tight mb-4">
                {t("skills.title")}
              </h2>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, i) => {
                const Icon = skillIcons[i];
                return (
                  <SectionReveal key={skill.title} delay={i * 80}>
                    <div className="bg-white rounded-[24px] p-8 border border-[#e2e8f0] skill-card">
                      <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center mb-5 ${skillIconClasses[i]}`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="font-bold text-[#1A2233] text-lg tracking-tight mb-2.5">{skill.title}</h3>
                      <p className="text-[15px] text-[#64748b] leading-relaxed">{skill.description}</p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ JOGOS ══ */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="games-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("gamesSection.eyebrow")}</span>
              <h2 id="games-title" className="text-4xl md:text-5xl font-extrabold text-[#1A2233] tracking-tight mb-4">
                {t("gamesSection.title")}
              </h2>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewGames.map((game, i) => (
                <SectionReveal key={game.slug} delay={i * 80}>
                  <GameCard {...game} />
                </SectionReveal>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/jogos"
                className="inline-flex items-center gap-2 border-2 border-[#0099CC] text-[#0099CC] hover:bg-[#0099CC] hover:text-white font-bold rounded-full px-10 py-3.5 transition-all shadow-lg shadow-black/[0.02] group"
              >
                {t("gamesSection.viewAll")} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ DIFERENCIAIS ══ */}
        <section className="section-padding bg-white" aria-labelledby="differentials-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("differentials.eyebrow")}</span>
              <h2 id="differentials-title" className="text-4xl md:text-5xl font-extrabold text-[#1A2233] tracking-tight mb-4">
                {t("differentials.title")}
              </h2>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {differentials.map((item, i) => {
                const Icon = diffIcons[i];
                return (
                  <SectionReveal key={item.title} delay={i * 80}>
                    <div className="flex gap-4 p-6 rounded-[20px] diff-item">
                      <div className={`w-12 h-12 min-w-12 rounded-2xl flex items-center justify-center mt-0.5 ${diffIconClasses[i]}`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A2233] mb-1.5">{item.title}</h3>
                        <p className="text-sm text-[#64748b] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ EQUIPE ══ */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="team-title">
          <div className="container-default">
            <SectionReveal className="text-center mb-14">
              <span className="section-eyebrow">{t("teamSection.eyebrow")}</span>
              <h2 id="team-title" className="text-4xl md:text-5xl font-extrabold text-[#1A2233] mb-4">
                {t("teamSection.title")}
              </h2>
              <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
                {t("teamSection.desc")}
              </p>
            </SectionReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {teamData.map((member, i) => (
                <SectionReveal key={member.name} delay={i * 80}>
                  <div className="bg-white rounded-[24px] p-7 text-center border-2 border-transparent team-card">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden border-2 border-[#E5E5E5]"
                      style={{ background: "linear-gradient(135deg,rgba(139,92,246,.1),rgba(0,153,204,.1))" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={member.image ?? "/images/equipe/placeholder.png"} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-[#1A2233] mb-1.5">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#8B5CF6]">{member.role}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <div className="text-center">
              <Link href="/sobre" className="inline-flex items-center gap-2 border-2 border-[#0099CC] text-[#0099CC] hover:bg-[#0099CC] hover:text-white font-bold rounded-full px-8 py-3 transition-all">
                {t("teamSection.knowTeam")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <CTASection title={t("cta.title")} subtitle={t("cta.subtitle")} />
      </main>
      <Footer />
    </>
  );
}
