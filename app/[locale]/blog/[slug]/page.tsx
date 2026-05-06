import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const POST_SLUGS = ["por-que-jogos-terapeuticos-funcionam"];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    POST_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!POST_SLUGS.includes(slug)) return {};
  const tPost = await getTranslations({ locale, namespace: `blog.posts.${slug}` as never });
  return {
    title: `${tPost("title")} — Blog Autigames`,
    description: tPost("excerpt"),
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: tPost("title"),
      description: tPost("excerpt"),
      publishedTime: tPost("date"),
      authors: [tPost("author")],
    },
  };
}

const categoryColors: Record<string, string> = {
  "Ciência por trás dos jogos":   "bg-[#8B5CF6]/20 text-[#c4b5fd]",
  "Science behind games":         "bg-[#8B5CF6]/20 text-[#c4b5fd]",
  "Ciencia detrás de los juegos": "bg-[#8B5CF6]/20 text-[#c4b5fd]",
  "Para pais":                    "bg-[#0099CC]/20 text-[#7dd3f8]",
  "For parents":                  "bg-[#0099CC]/20 text-[#7dd3f8]",
  "Para padres":                  "bg-[#0099CC]/20 text-[#7dd3f8]",
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!POST_SLUGS.includes(slug)) notFound();

  const tBlog = await getTranslations({ locale, namespace: "blog" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const post = {
    title: tBlog(`posts.${slug}.title`),
    excerpt: tBlog(`posts.${slug}.excerpt`),
    category: tBlog(`posts.${slug}.category`),
    date: tBlog(`posts.${slug}.date`),
    readTime: tBlog(`posts.${slug}.readTime`),
    author: tBlog(`posts.${slug}.author`),
    content: tBlog.raw(`posts.${slug}.content`) as string,
  };

  return (
    <>
      <Header />
      <main>

        {/* ── DARK HEADER ── */}
        <section className="gradient-hero-bg relative overflow-hidden pt-8 pb-20" aria-labelledby="post-title">
          <div className="hero-grid-overlay" aria-hidden="true" />
          <div className="orb-base orb-1" style={{ opacity: .5 }} aria-hidden="true" />
          <div className="orb-base orb-3" style={{ opacity: .4 }} aria-hidden="true" />

          <div className="container-default relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> {tCommon("backToBlog")}
            </Link>

            <div className="max-w-3xl">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full mb-5 inline-block ${categoryColors[post.category] ?? "bg-white/10 text-white/80"}`}>
                {post.category}
              </span>
              <h1 id="post-title" className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
                <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime} {tCommon("readTime")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE ── */}
        <article className="bg-white section-padding -mt-6">
          <div className="container-default">
            <div className="max-w-3xl mx-auto">
              <div className="h-60 bg-gradient-to-br from-[#E8F6FD] to-[#EDE9FE] rounded-[24px] flex items-center justify-center mb-10 text-5xl shadow-sm" aria-hidden="true">
                📖
              </div>
              <div
                className="prose prose-lg max-w-none text-[#64748b] leading-relaxed
                  [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-[#1A2233] [&_h2]:mt-10 [&_h2]:mb-4
                  [&_p]:mb-5
                  [&_ul]:my-5 [&_ul]:pl-5 [&_li]:mb-2 [&_li]:list-disc
                  [&_strong]:font-bold [&_strong]:text-[#1A2233]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-8 border-t border-[#E5E5E5]">
                <p className="text-sm font-bold uppercase tracking-widest text-[#94a3b8] mb-5">
                  {tCommon("readAlso")}
                </p>
                <Link
                  href="/jogos"
                  className="block bg-[#F8FAFC] rounded-[20px] p-6 hover:bg-[#E8F6FD] transition-colors group border border-[#E5E5E5] hover:border-[#0099CC]"
                >
                  <p className="font-bold text-[#1A2233] group-hover:text-[#0099CC] transition-colors mb-1">
                    {tCommon("seeGames")}
                  </p>
                  <p className="text-sm text-[#64748b]">{tCommon("seeGamesDesc")}</p>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <CTASection title={tBlog("cta.title")} subtitle={tBlog("cta.subtitle")} />
      </main>
      <Footer />
    </>
  );
}
