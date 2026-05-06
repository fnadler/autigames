import type { Metadata } from "next";
import { Quicksand, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getLocale } from "next-intl/server";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-XXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://autigames.com.br"),
  title: {
    default: "Autigames — Jogos Terapêuticos para Crianças com TEA",
    template: "%s | Autigames",
  },
  description:
    "Plataforma brasileira de jogos digitais terapêuticos para crianças com Transtorno do Espectro Autista. Desenvolvida com base científica e validada por especialistas.",
  keywords: ["autismo", "TEA", "jogos terapêuticos", "desenvolvimento infantil", "inclusão", "crianças"],
  authors: [{ name: "Autigames" }],
  creator: "Autigames",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://autigames.com.br",
    siteName: "Autigames",
    title: "Autigames — Jogos Terapêuticos para Crianças com TEA",
    description:
      "Jogos digitais terapêuticos criados especialmente para estimular habilidades sociais e emocionais em crianças com TEA.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Autigames" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autigames — Jogos Terapêuticos para Crianças com TEA",
    description: "Jogos digitais terapêuticos para crianças com TEA.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${quicksand.variable} ${openSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A] antialiased">
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
