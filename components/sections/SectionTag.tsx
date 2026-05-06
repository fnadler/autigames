interface SectionTagProps {
  children: React.ReactNode;
  color?: "blue" | "lilac" | "green" | "yellow" | "orange";
}

const colors = {
  blue: "bg-[#0099CC]/10 text-[#0099CC]",
  lilac: "bg-[#8B5CF6]/10 text-[#8B5CF6]",
  green: "bg-[#3DAA6B]/10 text-[#3DAA6B]",
  yellow: "bg-[#FFD700]/20 text-[#C9950C]",
  orange: "bg-[#0099CC]/10 text-[#0099CC]",
};

export function SectionTag({ children, color = "blue" }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 ${colors[color]}`}
    >
      {children}
    </span>
  );
}
