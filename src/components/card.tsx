import Link from "next/link";
import { bebasNeue } from "../../public/fonts/fonts";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  linkHref: string;
  linkText: string;
}

export default function Card({ imageSrc, imageAlt, title, linkHref, linkText }: CardProps) {
  return (
    <Link href={linkHref} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-[var(--accent)]/5 hover:-translate-y-1">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-light)] flex items-center justify-center p-4">
          <img
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>

        {/* Content */}
        <div className={`${bebasNeue.variable} p-6`}>
          <h2 className="font-title text-2xl text-[var(--foreground)] mb-3 tracking-wide">
            {title}
          </h2>
          <div className="flex items-center gap-2 text-[var(--accent-light)] text-sm font-medium group-hover:gap-3 transition-all duration-200">
            {linkText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}
