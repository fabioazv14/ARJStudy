import React from "react";
import Image from "next/image";
import { bebasNeue } from "../../public/fonts/fonts";

type TecnicaLineProps = {
  imageSrc: string;
  techniqueName: string;
  altText?: string;
  detail?: string;
};

export default function TecnicaLine({ imageSrc, techniqueName, altText, detail }: TecnicaLineProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.7)] transition hover:-translate-y-[2px] hover:border-[var(--accent)]/40 hover:shadow-[0_16px_60px_-26px_rgba(0,0,0,0.75)]">
      {/* Image */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-light)]">
        <Image
          src={imageSrc}
          alt={altText ?? techniqueName}
          fill
          sizes="80px"
          className="object-contain p-2 transition duration-300 group-hover:scale-[1.04]"
        />
      </div>

      {/* Text */}
      <div className={`${bebasNeue.variable} flex-1 space-y-1`}>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Técnica
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)] font-title leading-tight">
          {techniqueName}
        </h3>
        {detail ? <p className="text-sm text-[var(--muted)] leading-snug">{detail}</p> : null}
      </div>
    </div>
  );
}
