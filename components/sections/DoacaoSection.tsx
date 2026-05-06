"use client";

import { useState } from "react";
import { Copy, Check, QrCode } from "lucide-react";
import { useTranslations } from "next-intl";

const PIX_KEY = "60.955.520/0001-80";

function QRCodeSVG() {
  return (
    <svg height="180" role="img" aria-label="QR Code PIX Autigames" viewBox="0 0 41 41" width="180">
      <path d="M0,0 h41v41H0z" fill="#FFFFFF" shapeRendering="crispEdges" />
      <path
        d="M0 0h7v1H0zM9 0h4v1H9zM14 0h1v1H14zM19 0h1v1H19zM22 0h3v1H22zM28 0h1v1H28zM31 0h1v1H31zM34,0 h7v1H34zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h3v1H11zM15 1h1v1H15zM18 1h1v1H18zM22 1h1v1H22zM24 1h4v1H24zM29 1h2v1H29zM34 1h1v1H34zM40,1 h1v1H40zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM11 2h1v1H11zM14 2h2v1H14zM18 2h1v1H18zM21 2h2v1H21zM26 2h1v1H26zM34 2h1v1H34zM36 2h3v1H36zM40,2 h1v1H40zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h6v1H8zM15 3h4v1H15zM20 3h1v1H20zM24 3h1v1H24zM26 3h2v1H26zM29 3h2v1H29zM32 3h1v1H32zM34 3h1v1H34zM36 3h3v1H36zM40,3 h1v1H40zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM14 4h1v1H14zM19 4h1v1H19zM21 4h1v1H21zM27 4h2v1H27zM30 4h1v1H30zM32 4h1v1H32zM34 4h1v1H34zM36 4h3v1H36zM40,4 h1v1H40zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM15 5h1v1H15zM18 5h1v1H18zM22 5h1v1H22zM24 5h2v1H24zM27 5h2v1H27zM30 5h1v1H30zM32 5h1v1H32zM34 5h1v1H34zM40,5 h1v1H40zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34,6 h7v1H34zM16 7h1v1H16zM18 7h2v1H18zM21 7h1v1H21zM26 7h2v1H26zM32 7h1v1H32zM0 8h5v1H0zM6 8h5v1H6zM13 8h1v1H13zM15 8h4v1H15zM20 8h1v1H20zM25 8h2v1H25zM29 8h2v1H29zM32 8h2v1H32zM35 8h1v1H35zM37 8h1v1H37zM39 8h1v1H39zM0 9h1v1H0zM2 9h2v1H2zM5 9h1v1H5zM7 9h1v1H7zM10 9h1v1H10zM12 9h1v1H12zM14 9h1v1H14zM19 9h1v1H19zM21 9h5v1H21zM28 9h1v1H28zM31 9h1v1H31zM34 9h1v1H34zM36 9h1v1H36zM40,9 h1v1H40zM4 10h1v1H4zM6 10h2v1H6zM11 10h1v1H11zM15 10h1v1H15zM17 10h1v1H17zM21 10h1v1H21zM27 10h1v1H27zM30 10h1v1H30zM33 10h1v1H33zM39 10h1v1H39zM0 11h1v1H0zM3 11h3v1H3zM8 11h2v1H8zM11 11h2v1H11zM15 11h1v1H15zM21 11h1v1H21zM24 11h1v1H24zM26 11h1v1H26zM28 11h1v1H28zM30 11h1v1H30zM36 11h1v1H36zM39 11h1v1H39zM1 12h1v1H1zM3 12h1v1H3zM6 12h1v1H6zM11 12h1v1H11zM13 12h1v1H13zM15 12h4v1H15zM20 12h3v1H20zM25 12h1v1H25zM36 12h4v1H36zM0 13h3v1H0zM8 13h1v1H8zM12 13h1v1H12zM14 13h1v1H14zM19 13h1v1H19zM21 13h1v1H21zM26 13h3v1H26zM30 13h1v1H30zM32 13h1v1H32zM35 13h2v1H35zM40,13 h1v1H40zM3 14h5v1H3zM15 14h1v1H15zM18 14h1v1H18zM21 14h1v1H21zM24 14h2v1H24zM27 14h1v1H27zM32 14h2v1H32zM36 14h1v1H36zM38 14h2v1H38zM0 15h1v1H0zM2 15h1v1H2zM4 15h2v1H4zM8 15h3v1H8zM12 15h1v1H12zM19 15h3v1H19zM23 15h2v1H23zM27 15h2v1H27zM30 15h1v1H30zM32 15h1v1H32zM36 15h2v1H36zM39 15h1v1H39zM0 16h5v1H0zM6 16h5v1H6zM13 16h1v1H13zM16 16h3v1H16zM20 16h1v1H20zM25 16h1v1H25zM27 16h1v1H27zM29 16h1v1H29zM31 16h3v1H31zM35 16h1v1H35zM39 16h1v1H39zM0 17h1v1H0zM2 17h1v1H2zM7 17h1v1H7zM9 17h4v1H9zM14 17h1v1H14zM19 17h1v1H19zM21 17h4v1H21zM29 17h3v1H29zM34 17h1v1H34zM36 17h1v1H36zM40,17 h1v1H40zM2 18h1v1H2zM4 18h1v1H4zM6 18h5v1H6zM12 18h1v1H12zM14 18h2v1H14zM18 18h1v1H18zM21 18h1v1H21zM25 18h3v1H25zM29 18h2v1H29zM36 18h1v1H36zM38 18h2v1H38zM1 19h1v1H1zM5 19h1v1H5zM10 19h1v1H10zM12 19h1v1H12zM15 19h2v1H15zM18 19h1v1H18zM21 19h2v1H21zM24 19h1v1H24zM28 19h1v1H28zM30 19h3v1H30zM36 19h1v1H36zM39 19h1v1H39zM0 20h4v1H0zM6 20h1v1H6zM8 20h1v1H8zM10 20h4v1H10zM15 20h1v1H15zM17 20h2v1H17zM20 20h3v1H20zM25 20h1v1H25zM27 20h1v1H27zM35 20h1v1H35zM37,20 h4v1H37zM0 21h1v1H0zM2 21h1v1H2zM4 21h1v1H4zM14 21h1v1H14zM17 21h1v1H17zM19 21h1v1H19zM25 21h4v1H25zM30 21h1v1H30zM32 21h1v1H32zM36 21h1v1H36zM40,21 h1v1H40zM0 22h3v1H0zM4 22h1v1H4zM6 22h7v1H6zM14 22h2v1H14zM18 22h1v1H18zM20 22h2v1H20zM25 22h3v1H25zM29 22h2v1H29zM32 22h2v1H32zM38 22h2v1H38zM3 23h1v1H3zM5 23h1v1H5zM7 23h2v1H7zM10 23h2v1H10zM14 23h1v1H14zM18 23h1v1H18zM20 23h4v1H20zM27 23h1v1H27zM30 23h1v1H30zM36 23h2v1H36zM39 23h1v1H39zM1 24h1v1H1zM3 24h5v1H3zM9 24h3v1H9zM13 24h1v1H13zM16 24h3v1H16zM20 24h1v1H20zM23 24h1v1H23zM25 24h5v1H25zM32 24h2v1H32zM35 24h1v1H35zM37 24h1v1H37zM39 24h1v1H39zM1 25h3v1H1zM11 25h4v1H11zM19 25h1v1H19zM22 25h3v1H22zM26 25h1v1H26zM28 25h2v1H28zM31 25h1v1H31zM34 25h1v1H34zM36 25h1v1H36zM40,25 h1v1H40zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM10 26h1v1H10zM15 26h1v1H15zM21 26h2v1H21zM24 26h1v1H24zM27 26h3v1H27zM32 26h1v1H32zM35 26h2v1H35zM39 26h1v1H39zM1 27h1v1H1zM4 27h2v1H4zM8 27h3v1H8zM12 27h1v1H12zM14 27h2v1H14zM19 27h1v1H19zM21 27h1v1H21zM24 27h1v1H24zM28 27h1v1H28zM31 27h1v1H31zM33 27h1v1H33zM36 27h1v1H36zM3 28h1v1H3zM5 28h2v1H5zM10 28h4v1H10zM15 28h1v1H15zM17 28h2v1H17zM21 28h2v1H21zM24 28h2v1H24zM35 28h1v1H35zM37 28h2v1H37zM0 29h1v1H0zM2 29h1v1H2zM5 29h1v1H5zM7 29h1v1H7zM9 29h2v1H9zM12 29h1v1H12zM14 29h1v1H14zM20 29h2v1H20zM26 29h1v1H26zM30 29h1v1H30zM32 29h2v1H32zM36 29h1v1H36zM40,29 h1v1H40zM0 30h1v1H0zM6 30h1v1H6zM9 30h1v1H9zM12 30h2v1H12zM15 30h1v1H15zM18 30h1v1H18zM21 30h2v1H21zM24 30h1v1H24zM27 30h4v1H27zM32 30h2v1H32zM35 30h2v1H35zM38 30h2v1H38zM0 31h1v1H0zM3 31h1v1H3zM10 31h1v1H10zM12 31h1v1H12zM14 31h1v1H14zM18 31h2v1H18zM21 31h2v1H21zM24 31h1v1H24zM30 31h5v1H30zM39 31h1v1H39zM0 32h1v1H0zM2 32h1v1H2zM4 32h4v1H4zM9 32h1v1H9zM13 32h1v1H13zM16 32h3v1H16zM20 32h1v1H20zM25 32h3v1H25zM29 32h2v1H29zM32 32h7v1H32zM8 33h1v1H8zM10 33h3v1H10zM14 33h1v1H14zM19 33h1v1H19zM21 33h4v1H21zM28 33h1v1H28zM30 33h3v1H30zM36 33h1v1H36zM40,33 h1v1H40zM0 34h7v1H0zM8 34h1v1H8zM10 34h1v1H10zM13 34h1v1H13zM15 34h1v1H15zM18 34h1v1H18zM20 34h3v1H20zM24 34h1v1H24zM27 34h3v1H27zM31 34h2v1H31zM34 34h1v1H34zM36 34h2v1H36zM39 34h1v1H39zM0 35h1v1H0zM6 35h1v1H6zM9 35h4v1H9zM14 35h1v1H14zM18 35h1v1H18zM20 35h3v1H20zM24 35h1v1H24zM26 35h1v1H26zM28 35h1v1H28zM32 35h1v1H32zM36 35h1v1H36zM39,35 h2v1H39zM0 36h1v1H0zM2 36h3v1H2zM6 36h1v1H6zM8 36h1v1H8zM10 36h1v1H10zM13 36h1v1H13zM15 36h1v1H15zM17 36h2v1H17zM20 36h4v1H20zM25 36h1v1H25zM27 36h2v1H27zM32 36h7v1H32zM0 37h1v1H0zM2 37h3v1H2zM6 37h1v1H6zM8 37h2v1H8zM11 37h2v1H11zM14 37h1v1H14zM20 37h2v1H20zM25 37h6v1H25zM32 37h2v1H32zM35 37h1v1H35zM37 37h1v1H37zM39 37h1v1H39zM0 38h1v1H0zM2 38h3v1H2zM6 38h1v1H6zM8 38h1v1H8zM10 38h1v1H10zM12 38h1v1H12zM15 38h2v1H15zM20 38h3v1H20zM24 38h1v1H24zM27 38h3v1H27zM31 38h1v1H31zM34 38h1v1H34zM36 38h2v1H36zM39,38 h2v1H39zM0 39h1v1H0zM6 39h1v1H6zM8 39h2v1H8zM11 39h2v1H11zM19 39h6v1H19zM26 39h1v1H26zM28 39h1v1H28zM30 39h1v1H30zM33 39h2v1H33zM36 39h1v1H36zM39 39h1v1H39zM0 40h7v1H0zM8 40h1v1H8zM10 40h1v1H10zM13 40h1v1H13zM15 40h4v1H15zM20 40h1v1H20zM25 40h2v1H25zM29 40h1v1H29zM31 40h1v1H31zM36 40h3v1H36z"
        fill="#000000"
        shapeRendering="crispEdges"
      />
    </svg>
  );
}

export function DoacaoSection() {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("home.donation");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = PIX_KEY;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="section-padding bg-[#0A1628]" aria-labelledby="doacao-title">
      <div className="container-default">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[#0099CC]/15 text-[#33B5E5] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              {t("eyebrow")}
            </span>
            <h2 id="doacao-title" className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              {t("title")}
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
              {t("description")}
            </p>
            <ul className="space-y-2 mb-8 text-left inline-block">
              {(["impact0", "impact1", "impact2"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                  <span className="w-5 h-5 rounded-full bg-[#0099CC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#0099CC] block" />
                  </span>
                  {t(key)}
                </li>
              ))}
            </ul>
            <p className="text-[#64748B] text-sm mb-4">{t("instructions")}</p>
          </div>

          {/* Right: QR code + button */}
          <div className="flex flex-col items-center gap-6 flex-shrink-0">
            <div className="bg-white rounded-[24px] p-6 shadow-2xl shadow-black/40">
              <QRCodeSVG />
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold text-[#1A2233] uppercase tracking-wider mb-1">PIX CNPJ</p>
                <p className="text-sm font-mono text-[#64748B]">{PIX_KEY}</p>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#0099CC] hover:bg-[#33B5E5] active:scale-[0.98] text-white font-bold px-8 py-4 rounded-[16px] text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#0099CC]/30 hover:-translate-y-0.5 min-w-[200px] justify-center"
            >
              {copied ? (
                <><Check size={18} />{t("copied")}</>
              ) : (
                <><Copy size={18} />{t("copyButton")}</>
              )}
            </button>

            <div className="flex items-center gap-2 text-[#475569] text-xs">
              <QrCode size={14} />
              <span>{t("qrHint")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
