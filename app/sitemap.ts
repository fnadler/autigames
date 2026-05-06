import type { MetadataRoute } from "next";
import gamesData from "@/content/games.json";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autigames.com.br";

const staticPages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/para-pais", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/para-profissionais", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/para-empresas", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sobre", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/jogos", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contato", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/termos-de-uso-e-privacidade", priority: 0.3, changeFrequency: "yearly" as const },
];

const blogPosts = [
  { slug: "por-que-jogos-terapeuticos-funcionam", date: "2026-01-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const gameEntries = gamesData.map((game) => ({
    url: `${BASE_URL}/jogos/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...gameEntries, ...blogEntries];
}
