"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = useTranslations("heroMockup");

  const emotions = [
    { emoji: "😊", label: t("emotion0"), image: "/images/personagens/pedro/feliz_01.png" },
    { emoji: "😢", label: t("emotion1"), image: "/images/personagens/pedro/triste_01.png" },
    { emoji: "😡", label: t("emotion2"), image: "/images/personagens/pedro/raiva_01.png" },
    { emoji: "😮", label: t("emotion3"), image: "/images/personagens/pedro/tranquilo.png" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % emotions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, emotions.length]);

  const handleEmotionClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="glass-card rounded-[32px] p-8 w-full max-w-[420px] relative z-10">
      <div className="relative h-[240px] mb-5 overflow-hidden">
        {emotions.map((emo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={emo.image}
            alt={`Pedro ${emo.label}`}
            className={`absolute inset-0 w-full h-full object-contain mx-auto transition-all duration-500 transform ${
              i === activeIndex
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95 pointer-events-none"
            } ${i === activeIndex ? "animate-float" : ""}`}
          />
        ))}
      </div>

      <p className="text-white font-bold text-lg text-center mb-1">{t("gameName")}</p>
      <p className="text-white/45 text-xs text-center mb-6">{t("playing")}</p>

      <div className="flex gap-2.5 justify-center mb-6">
        {emotions.map((emo, i) => (
          <button
            key={i}
            onClick={() => handleEmotionClick(i)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-300 ${
              i === activeIndex
                ? "bg-[#0099CC] border-[#0099CC] scale-110 shadow-lg shadow-[#0099CC]/40"
                : "bg-white/8 border-white/10 hover:bg-white/15 hover:scale-105"
            }`}
            aria-label={`${t("feelAria")} ${emo.label}`}
          >
            {emo.emoji}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-300">
        <CheckCircle size={18} className="text-[#3DAA6B] flex-shrink-0" />
        <span className="text-sm font-semibold text-white">
          {t("identified")} {emotions[activeIndex].label}
        </span>
      </div>
    </div>
  );
}
