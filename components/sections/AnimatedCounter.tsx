"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center py-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div 
        className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-none tracking-tighter mb-1"
        style={{ fontFamily: 'var(--font-quicksand)', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
      >
        {value}
      </div>
      <div 
        className="text-[10px] md:text-[11px] font-bold text-white/80 uppercase tracking-[1px] leading-tight"
        style={{ fontFamily: 'var(--font-opensans)' }}
      >
        {label}
      </div>
    </div>
  );
}
