import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { fjallaOne, bebasNeue } from "../../public/fonts/fonts";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [submenuSimbolosOpen, setSubmenuSimbolosOpen] = useState(false);
  const [submenuTecnicaOpen, setSubmenuTecnicaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const simbolosRef = useRef<HTMLDivElement>(null);
  const tecnicaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const toggleSimbolos = () => setSubmenuSimbolosOpen((prev) => !prev);
  const toggleTecnica = () => setSubmenuTecnicaOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (simbolosRef.current && !simbolosRef.current.contains(event.target as Node)) {
        setSubmenuSimbolosOpen(false);
      }
      if (tecnicaRef.current && !tecnicaRef.current.contains(event.target as Node)) {
        setSubmenuTecnicaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setSubmenuSimbolosOpen(false);
      setSubmenuTecnicaOpen(false);
      setMobileOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  const linkClass = (path: string, exact = true) => {
    const active = exact ? router.pathname === path : router.pathname.startsWith(path);
    return `font-navbut text-sm tracking-wider uppercase px-4 py-2 rounded-md transition-all duration-200 ${
      active
        ? "text-[var(--accent-light)] bg-[var(--accent)]/10"
        : "text-[var(--foreground)] hover:text-[var(--accent-light)] hover:bg-[var(--accent)]/5"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md shadow-lg shadow-[var(--shadow-color)] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className={`${bebasNeue.variable} flex items-center gap-3`}>
          <img
            src={theme === "dark" ? "/images/arj/arjlogowhite.svg" : "/images/arj/arjlogoblack.svg"}
            alt="ARJLOGO"
            width={32}
            height={32}
            className="opacity-90"
          />
          <Link href="/" className="font-title text-2xl tracking-wider text-[var(--foreground)] hover:text-[var(--accent-light)] transition-colors">
            ARJ Study
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--foreground)] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className={`${fjallaOne.variable} hidden md:flex items-center gap-1`}>
          <Link href="/historia/" className={linkClass("/historia")}>
            História
          </Link>

          {/* Submenu: Símbolos */}
          <div className="relative" ref={simbolosRef}>
            <button onClick={toggleSimbolos} className={linkClass("/simbolos", false)}>
              Símbolos
              <svg className={`inline-block ml-1 w-3 h-3 transition-transform duration-200 ${submenuSimbolosOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-2xl shadow-black/40 z-50 overflow-hidden origin-top transition-all duration-200 ease-out ${
                submenuSimbolosOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible pointer-events-none"
              }`}
            >
              <Link href="/simbolos/alexryujitsu" className="block px-5 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-light)] transition-colors border-b border-[var(--border)]">
                Alex Ryu Jitsu
              </Link>
              <Link href="/simbolos/aamf" className="block px-5 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-light)] transition-colors border-b border-[var(--border)]">
                Associação de Artes Marciais de Famalicão
              </Link>
              <Link href="/simbolos/AHHHHH" className="block px-5 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-light)] transition-colors">
                AHHHHH
              </Link>
            </div>
          </div>

          {/* Submenu: Técnica */}
          <div className="relative" ref={tecnicaRef}>
            <button onClick={toggleTecnica} className={linkClass("/tecnica", false)}>
              Técnica
              <svg className={`inline-block ml-1 w-3 h-3 transition-transform duration-200 ${submenuTecnicaOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-2xl shadow-black/40 z-50 overflow-hidden origin-top transition-all duration-200 ease-out ${
                submenuTecnicaOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible pointer-events-none"
              }`}
            >
              <Link href="/tecnica/tsuki" className="block px-5 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-light)] transition-colors border-b border-[var(--border)]">
                Tsuki
              </Link>
              <Link href="/tecnica/gueri" className="block px-5 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-light)] transition-colors border-b border-[var(--border)]">
                Gueri
              </Link>
              <Link href="/tecnica/uke" className="block px-5 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-light)] transition-colors">
                Uke
              </Link>
            </div>
          </div>

          <Link href="/graduacoes/" className={linkClass("/graduacoes")}>
            Graduações
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-light)] transition-all duration-200"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[var(--surface)] border-t border-[var(--border)]`}
      >
        <div className={`${fjallaOne.variable} flex flex-col px-6 py-4 gap-2`}>
          <Link href="/historia/" className={linkClass("/historia")}>
            História
          </Link>
          <Link href="/simbolos/alexryujitsu" className={linkClass("/simbolos", false)}>
            Símbolos
          </Link>
          <Link href="/tecnica/tsuki" className={linkClass("/tecnica", false)}>
            Técnica
          </Link>
          <Link href="/graduacoes/" className={linkClass("/graduacoes")}>
            Graduações
          </Link>

          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 font-navbut text-sm tracking-wider uppercase px-4 py-2 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] transition-all duration-200"
          >
            {theme === "dark" ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Light mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                Dark mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
