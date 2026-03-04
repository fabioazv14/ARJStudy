type SymbolProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export default function Symbol({ imageSrc, imageAlt, title, description }: SymbolProps) {
  return (
    <div className="group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 text-center max-w-lg hover:border-[var(--accent)]/30 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
      <div className="flex justify-center mb-6">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-48 h-48 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{title}</h3>
      <p className="text-[var(--muted)] text-base leading-relaxed">{description}</p>
    </div>
  );
}
  