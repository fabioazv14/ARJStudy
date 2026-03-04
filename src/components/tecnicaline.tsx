import React from "react";
import { bebasNeue } from "../../public/fonts/fonts";

type TecnicaLineProps = {
  imageSrc: string;
  techniqueName: string;
  altText?: string;
};

export default function TecnicaLine({ imageSrc, techniqueName, altText }: TecnicaLineProps) {
  return (
    <div className="group flex items-center gap-8 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 pr-8 mx-auto max-w-3xl w-full cursor-pointer transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5">
      {/* Image */}
      <div className="overflow-hidden rounded-lg w-28 h-36 flex-shrink-0 bg-[var(--surface-light)]">
        <img
          src={imageSrc}
          alt={altText || techniqueName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className={`${bebasNeue.variable} flex-1`}>
        <h3 className="text-3xl font-semibold text-[var(--foreground)] font-title tracking-wide">
          {techniqueName}
        </h3>
        <div className="mt-2 w-10 h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent rounded opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-300" />
      </div>

      {/* Arrow */}
      <svg className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent-light)] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
