import { bebasNeue } from "../../public/fonts/fonts";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface HeroProps {
  title: string;
  description: string;
  imageSrcDark: string;
  imageSrcLight: string;
  imageAlt: string;
}

export default function Hero({ title, description, imageSrcDark, imageSrcLight, imageAlt }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const translateY = Math.min(scrollY / 4, 80);
  const imageSrc = theme === "dark" ? imageSrcDark : imageSrcLight;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-dark)]/20 via-[var(--background)] to-[var(--background)]" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

      <div
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-12 w-full"
        style={{
          opacity,
          transform: `translateY(-${translateY}px)`,
        }}
      >
        {/* Text */}
        <div className={`${bebasNeue.variable} w-full md:w-1/2 md:pr-10`}>
          <div className="w-12 h-0.5 bg-[var(--accent)] mb-6" />
          <h1 className="font-title text-7xl md:text-8xl text-[var(--foreground)] font-bold mb-6 leading-none tracking-wide">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-lg">
            {description}
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--accent-light)] transition-colors duration-200"
            >
              Explorar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--accent)]/5 rounded-full blur-3xl" />
            <img
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={400}
              className="relative w-full max-w-sm object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-[var(--muted)]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--muted)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}