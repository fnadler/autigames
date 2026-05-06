import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2, Timer, Settings2 } from "lucide-react";

interface GameCardProps {
  slug: string;
  name: string;
  status: string;
  statusLabel: string;
  shortDescription: string;
  emoji?: string;
  themeColor?: string;
  ageRange?: string;
  showLink?: boolean;
}

const statusStyles: Record<string, { bg: string; text: string; border: string; icon: any }> = {
  launched: { 
    bg: "bg-[#E8F5E9]", 
    text: "text-[#2E7D32]", 
    border: "border-[#A5D6A7]", 
    icon: CheckCircle2 
  },
  homologation: { 
    bg: "bg-[#FFF9C4]", 
    text: "text-[#F57F17]", 
    border: "border-[#FFF59D]", 
    icon: Timer 
  },
  development: { 
    bg: "bg-[#F3E5F5]", 
    text: "text-[#7B1FA2]", 
    border: "border-[#E1BEE7]", 
    icon: Settings2 
  },
};

export function GameCard({
  slug,
  name,
  status,
  statusLabel,
  shortDescription,
  emoji = "🎮",
  themeColor = "#F8FAFC",
  ageRange,
  showLink = true,
}: GameCardProps) {
  const style = statusStyles[status] || statusStyles.development;
  const StatusIcon = style.icon;

  return (
    <div className="group bg-white rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 flex flex-col h-full shadow-lg shadow-black/[0.04]">
      {/* Header with Emoji */}
      <div 
        className="h-44 flex items-center justify-center relative transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundColor: themeColor }}
      >
        <span className="text-6xl drop-shadow-xl select-none transform transition-transform duration-700 group-hover:rotate-6" role="img" aria-label={name}>
          {emoji}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        {/* Status Badge */}
        <div className="mb-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${style.bg} ${style.text} ${style.border}`}>
            <StatusIcon size={12} strokeWidth={2.5} />
            {statusLabel}
          </div>
        </div>

        <h3 className="font-bold text-[#1A2233] text-xl tracking-tight mb-2.5">{name}</h3>
        <p className="text-[14px] text-[#64748b] leading-relaxed mb-6 flex-1">
          {shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          {ageRange && (
            <div className="bg-[#e0f7fa] text-[#0097a7] text-[10px] font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
              {ageRange}
            </div>
          )}
          
          {showLink && (
            <Link
              href={`/jogos/${slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0099CC] group-hover:text-[#0077A3] transition-all ml-auto"
            >
              Ver detalhes <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
