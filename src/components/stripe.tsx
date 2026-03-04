import { bebasNeue } from "../../public/fonts/fonts";

type StripeProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  color: string;
};

const accentColors: Record<string, string> = {
  white: "#d4d4d4",
  yellow: "#eab308",
  orange: "#f97316",
  green: "#22c55e",
  blue: "#3b82f6",
  purple: "#a855f7",
  red: "#ef4444",
  brown: "#b37e66",
  black: "#525252",
};

export default function GradeStripe({ imageSrc, imageAlt, title, description, color }: StripeProps) {
  const accent = accentColors[color] || "#d4d4d4";

  return (
    <div
      className="group flex items-center gap-6 rounded-xl px-6 py-5 mx-auto max-w-3xl w-full transition-all duration-300 ease-out bg-[var(--surface)] border border-[var(--border)] hover:border-transparent hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
      style={{
        borderLeftWidth: "3px",
        borderLeftColor: accent,
      }}
    >
      {/* Belt image */}
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className={`${bebasNeue.variable} flex flex-col`}>
        <h3 className="text-3xl font-semibold text-[var(--foreground)] font-title tracking-wide">
          {title}
        </h3>
        <p className="text-base text-[var(--muted)] mt-0.5">{description}</p>
      </div>

      {/* Subtle accent dot */}
      <div
        className="ml-auto w-2.5 h-2.5 rounded-full opacity-60 flex-shrink-0"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}
  