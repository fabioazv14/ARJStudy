import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { fjallaOne, bebasNeue } from "../../public/fonts/fonts";

export default function Navbar() {
  const [submenuSimbolosOpen, setSubmenuSimbolosOpen] = useState(false);
  const [submenuTecnicaOpen, setSubmenuTecnicaOpen] = useState(false);
  const simbolosRef = useRef<HTMLDivElement>(null);
  const tecnicaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleSimbolos = () =>
    setSubmenuSimbolosOpen((prev) => !prev);

  const toggleTecnica = () =>
    setSubmenuTecnicaOpen((prev) => !prev);

  // Fecha submenu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        simbolosRef.current &&
        !simbolosRef.current.contains(event.target as Node)
      ) {
        setSubmenuSimbolosOpen(false);
      }
      if (
        tecnicaRef.current &&
        !tecnicaRef.current.contains(event.target as Node)
      ) {
        setSubmenuTecnicaOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha submenu ao mudar de rota
  useEffect(() => {
    const handleRouteChange = () => {
      setSubmenuSimbolosOpen(false);
      setSubmenuTecnicaOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-400 z-50 flex items-center justify-between px-4 py-0 bg-red-300 rounded-2xl mt-5">
      {/* Logo */}
      <div className={`${bebasNeue.variable} flex items-center`}>
        <img
          src="/images/arj/arjlogoblack.svg"
          alt="ARJLOGO"
          width={40}
          height={40}
          className="mr-3"
        />
        <Link href="/" className="font-title text-4xl font-bold">
          ARJ Study
        </Link>
      </div>

      {/* Rotas */}
      <div className={`${fjallaOne.variable} flex space-x-0`}>
        <Link
          href="/historia/"
          className={`font-navbut text-2xl block px-8 py-6 transition ${
            router.pathname === "/historia"
              ? "bg-red-500"
              : "bg-red-300 hover:bg-red-500"
          }`}
        >
          História
        </Link>

        {/* Submenu: Símbolos */}
        <div className="relative" ref={simbolosRef}>
          <button
            onClick={toggleSimbolos}
            className={`font-navbut text-2xl block px-8 py-6 transition ${
              router.pathname.startsWith("/simbolos")
                ? "bg-red-500"
                : "bg-red-300 hover:bg-red-500"
            }`}
          >
            Símbolos
          </button>

          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-red-200 text-black border-2 border-gray-400 rounded-2xl shadow-xl z-50 text-center origin-top transition-all duration-300 ease-in-out transform ${
              submenuSimbolosOpen
                ? "scale-100 opacity-100 visible"
                : "scale-95 opacity-0 invisible pointer-events-none"
            }`}
          >
            <Link href="/simbolos/alexryujitsu" className="block px-4 py-2 rounded-2xl hover:bg-red-100">
              Alex Ryu Jitsu
            </Link>
            <Link href="/simbolos/aamf" className="block px-4 py-2 rounded-2xl hover:bg-red-100">
              Associação de Artes Marciais de Famalicão
            </Link>
            <Link href="/simbolos/AHHHHH" className="block px-4 py-2 rounded-2xl hover:bg-red-100">
              AHHHHH
            </Link>
          </div>
        </div>

        {/* Submenu: Técnica */}
        <div className="relative" ref={tecnicaRef}>
          <button
            onClick={toggleTecnica}
            className={`font-navbut text-2xl block px-8 py-6 transition ${
              router.pathname.startsWith("/tecnica")
                ? "bg-red-500"
                : "bg-red-300 hover:bg-red-500"
            }`}
          >
            Técnica
          </button>

          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-red-200 text-black border-2 border-gray-400 rounded-2xl shadow-xl z-50 text-center origin-top transition-all duration-300 ease-in-out transform ${
              submenuTecnicaOpen
                ? "scale-100 opacity-100 visible"
                : "scale-95 opacity-0 invisible pointer-events-none"
            }`}
          >
            <Link href="/tecnica/tsuki" className="block px-4 py-2 rounded-2xl hover:bg-red-100">
              Tsuki
            </Link>
            <Link href="/tecnica/gueri" className="block px-4 py-2 rounded-2xl hover:bg-red-100">
              Gueri
            </Link>
            <Link href="/tecnica/uke" className="block px-4 py-2 rounded-2xl hover:bg-red-100">
              Uke
            </Link>
          </div>
        </div>

        <Link
          href="/graduacoes/"
          className={`font-navbut text-2xl block px-8 py-6 transition ${
            router.pathname === "/graduacoes"
              ? "bg-red-500"
              : "bg-red-300 hover:bg-red-500"
          }`}
        >
          Graduações
        </Link>
      </div>
    </nav>
  );
}
