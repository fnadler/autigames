import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DarkHero } from "@/components/sections/DarkHero";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/blog" },
  };
}

const categoryColors: Record<string, string> = {
  "Para pais":                  "bg-[#0099CC]/10 text-[#0099CC]",
  "Para profissionais":         "bg-[#0099CC]/10 text-[#0099CC]",
  "For parents":                "bg-[#0099CC]/10 text-[#0099CC]",
  "For professionals":          "bg-[#0099CC]/10 text-[#0099CC]",
  "Para padres":                "bg-[#0099CC]/10 text-[#0099CC]",
  "Para profesionales":         "bg-[#0099CC]/10 text-[#0099CC]",
  Inclusão:                     "bg-[#3DAA6B]/10 text-[#3DAA6B]",
  Inclusion:                    "bg-[#3DAA6B]/10 text-[#3DAA6B]",
  Inclusión:                    "bg-[#3DAA6B]/10 text-[#3DAA6B]",
  Casos:                        "bg-[#FFD700]/10 text-[#C9950C]",
  Cases:                        "bg-[#FFD700]/10 text-[#C9950C]",
  "Ciência por trás dos jogos": "bg-[#8B5CF6]/10 text-[#8B5CF6]",
  "Science behind games":       "bg-[#8B5CF6]/10 text-[#8B5CF6]",
  "Ciencia detrás de los juegos": "bg-[#8B5CF6]/10 text-[#8B5CF6]",
};

const POST_SLUG = "por-que-jogos-terapeuticos-funcionam";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tPost = await getTranslations({ locale, namespace: `blog.posts.${POST_SLUG}` as never });

  const post = {
    slug: POST_SLUG,
    title: tPost("title"),
    excerpt: tPost("excerpt"),
    category: tPost("category"),
    date: tPost("date"),
    readTime: tPost("readTime"),
  };

  const categories = [
    t("categories.c0"),
    t("categories.c1"),
    t("categories.c2"),
    t("categories.c3"),
    t("categories.c4"),
  ];

  return (
    <>
      <Header />
      <main>

        <DarkHero
          id="blog-title"
          eyebrow={t("hero.eyebrow")}
          title={
            <>
              {t("hero.title")}{" "}
              <span className="text-rainbow">{t("hero.titleHighlight")}</span>
            </>
          }
          description={t("hero.description")}
          primaryLabel={t("hero.primaryLabel")}
          primaryHref="#posts"
          secondaryLabel={t("hero.secondaryLabel")}
          secondaryHref="https://wa.me/5551992600843"
        />

        <section id="posts" className="section-padding bg-white">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Posts list */}
              <div className="lg:col-span-2 space-y-8">
                <SectionReveal>
                  <article className="group bg-white rounded-[24px] border border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="h-52 bg-gradient-to-br from-[#E8F6FD] to-[#EDE9FE] flex items-center justify-center">
                      <div className="text-6xl" aria-hidden="true">📖</div>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-[#1A2233] mb-3 group-hover:text-[#0099CC] transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-[#64748b] leading-relaxed mb-5">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-[#94a3b8]">
                          <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime} {tCommon("readTime")}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0099CC] hover:gap-2.5 transition-all"
                        >
                          {tCommon("readArticle")} <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </SectionReveal>

                <SectionReveal>
                  <div className="bg-[#F8FAFC] rounded-[24px] p-10 text-center border border-dashed border-[#E5E5E5]">
                    <p className="text-[#94a3b8] font-medium">{tCommon("comingSoon")}</p>
                  </div>
                </SectionReveal>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8" aria-label={t("categoriesTitle")}>
                <SectionReveal>
                  <div className="bg-[#F8FAFC] rounded-[24px] p-6 border border-[#E5E5E5]">
                    <h3 className="font-bold text-[#1A2233] mb-4">{t("categoriesTitle")}</h3>
                    <ul className="space-y-1">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#64748b] hover:bg-white hover:text-[#0099CC] transition-colors">
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>

                <SectionReveal delay={100}>
                  <div className="gradient-hero-bg relative overflow-hidden rounded-[24px] p-7 text-white">
                    <div
                      className="orb-base"
                      style={{ width: "180px", height: "180px", background: "radial-gradient(circle,rgba(0,153,204,.5) 0%,transparent 70%)", top: "-40px", right: "-40px", filter: "blur(35px)", position: "absolute", pointerEvents: "none" }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10">
                      <p className="font-bold text-lg mb-2">{t("downloadCTA")}</p>
                      <p className="text-sm text-white/80 mb-5">{t("downloadCTAText")}</p>
                      <Link
                        href="/#baixar-app"
                        className="inline-block bg-white text-[#0099CC] font-bold py-2.5 px-6 rounded-xl text-sm hover:bg-white/90 transition-colors"
                      >
                        {t("downloadCTABtn")}
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
