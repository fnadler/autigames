import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.combined.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/termos-de-uso-e-privacidade" },
  };
}

export default async function TermosPrivacidadePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "legal.combined" });

  const sections = [
    { title: t("s1title"), text: t("s1text") },
    { title: t("s2title"), text: t("s2text") },
    { title: t("s3title"), text: t("s3text") },
    { title: t("s4title"), text: t("s4text") },
    { title: t("s5title"), text: t("s5text") },
    { title: t("s6title"), text: t("s6text") },
    { title: t("s7title"), text: t("s7text") },
    { title: t("s8title"), text: t("s8text") },
    { title: t("s9title"), text: t("s9text") },
    { title: t("s10title"), text: t("s10text") },
    { title: t("s11title"), text: t("s11text") },
    { title: t("s12title"), text: t("s12text") },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="gradient-hero-bg relative overflow-hidden py-16" aria-label={t("title")}>
          <div className="hero-grid-overlay" style={{ opacity: .3 }} aria-hidden="true" />
          <div
            className="orb-base"
            style={{ width: "300px", height: "300px", background: "radial-gradient(circle,rgba(139,92,246,.35) 0%,transparent 70%)", top: "-80px", left: "50%", transform: "translateX(-50%)", filter: "blur(60px)", position: "absolute", pointerEvents: "none" }}
            aria-hidden="true"
          />
          <div className="container-default relative z-10 text-center">
            <span className="section-eyebrow" style={{ color: "rgba(255,255,255,.6)" }}>{t("eyebrow")}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-3">{t("title")}</h1>
            <p className="text-white/50 text-sm">{t("lastUpdate")}</p>
          </div>
        </section>

        <section className="bg-white section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="prose prose-lg max-w-none text-[#64748b] leading-relaxed [&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:text-[#1A2233] [&_h3]:mt-10 [&_h3]:mb-3">

              {t("intro").split("\n\n").map((para, i) => (
                <p key={i} className="whitespace-pre-line mb-4">{para}</p>
              ))}

              {sections.map((s) => (
                <div key={s.title}>
                  <h3>{s.title}</h3>
                  {s.text.split("\n\n").map((para, i) => (
                    <p key={i} className="whitespace-pre-line mb-3">{para}</p>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
