import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkHero } from "@/components/sections/DarkHero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contato.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/contato" },
  };
}

export default async function ContatoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contato" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const contacts = [
    { icon: Phone,         label: t("phone"),    value: "(51) 99260-0843",          href: "https://wa.me/5551992600843",     external: false },
    { icon: Mail,          label: t("email"),    value: "contato@autigames.com.br", href: "mailto:contato@autigames.com.br", external: false },
    { icon: InstagramIcon, label: t("instagram"), value: "@autigames",              href: "https://instagram.com/autigames", external: true  },
  ];

  return (
    <>
      <Header />
      <main>

        <DarkHero
          id="contato-title"
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
        />

        <section id="formulario" className="section-padding bg-white" aria-label={t("channels")}>
          <div className="container-default">
            <div className="grid lg:grid-cols-5 gap-16">

              {/* Info */}
              <div className="lg:col-span-2 space-y-8">
                <SectionReveal>
                  <h2 className="text-2xl font-extrabold text-[#1A2233] mb-6">{t("channels")}</h2>
                  <div className="space-y-4">
                    {contacts.map((contact) => {
                      const Icon = contact.icon;
                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target={contact.external ? "_blank" : undefined}
                          rel={contact.external ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-4 rounded-[20px] border border-[#E5E5E5] hover:border-[#0099CC] hover:shadow-sm transition-all group"
                        >
                          <div className="w-12 h-12 bg-[#0099CC]/10 text-[#0099CC] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon size={20} />
                          </div>
                          <div>
                            <p className="text-xs text-[#64748b] font-medium">{contact.label}</p>
                            <p className="font-bold text-[#1A2233] group-hover:text-[#0099CC] transition-colors">{contact.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </SectionReveal>

                <SectionReveal delay={100}>
                  <div className="gradient-hero-bg relative overflow-hidden rounded-[20px] p-7 text-white">
                    <div className="orb-base" style={{ width: "200px", height: "200px", background: "radial-gradient(circle,rgba(0,153,204,.4) 0%,transparent 70%)", top: "-50px", right: "-50px", filter: "blur(40px)", position: "absolute", pointerEvents: "none" }} />
                    <div className="relative z-10">
                      <p className="font-bold text-lg mb-2">{tCommon("needHelp")}</p>
                      <p className="text-sm text-white/80 mb-5">{tCommon("needHelpText")}</p>
                      <a
                        href="https://wa.me/5551992600843"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#0099CC] font-bold py-2.5 px-6 rounded-xl text-sm hover:bg-white/90 transition-colors"
                      >
                        {tCommon("openWhatsApp")}
                      </a>
                    </div>
                  </div>
                </SectionReveal>
              </div>

              {/* Formulário */}
              <div className="lg:col-span-3">
                <SectionReveal>
                  <h2 className="text-2xl font-extrabold text-[#1A2233] mb-7">{t("sendMessage")}</h2>
                  <ContactForm />
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
