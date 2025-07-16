import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { fjallaOne, bebasNeue } from "../../public/fonts/fonts";

export default function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleSubmenu = () => setSubmenuOpen((prev) => !prev);

  // 🔁 Fecha submenu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setSubmenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔁 Fecha submenu ao mudar de rota
  useEffect(() => {
    const handleRouteChange = () => setSubmenuOpen(false);
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

        <div className="relative" ref={submenuRef}>
          <button
            onClick={toggleSubmenu}
            className={`font-navbut text-2xl block px-8 py-6 transition ${
              router.pathname.startsWith("/simbolos")
                ? "bg-red-500"
                : "bg-red-300 hover:bg-red-500"
            }`}
          >
            Símbolos
          </button>

          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-red-200 text-black border-2 border-black rounded-2xl shadow-xl z-50 text-center origin-top transition-all duration-300 ease-in-out transform ${
              submenuOpen
                ? "scale-100 opacity-100 visible"
                : "scale-95 opacity-0 invisible pointer-events-none"
            }`}
          >
            <Link
              href="/simbolos/alexryujitsu"
              className="block px-4 py-2 hover:bg-red-100"
            >
              Alex Ryu Jitsu
            </Link>
            <Link
              href="/simbolos/aamf"
              className="block px-4 py-2 hover:bg-red-100"
            >
              Associação de Artes Marciais de Famalicão
            </Link>
            <Link
              href="/simbolos/AHHHHH"
              className="block px-4 py-2 hover:bg-red-100"
            >
              AHHHHH
            </Link>
          </div>
        </div>

        <Link
          href="/tecnica/"
          className={`font-navbut text-2xl block px-8 py-6 transition ${
            router.pathname === "/tecnica"
              ? "bg-red-500"
              : "bg-red-300 hover:bg-red-500"
          }`}
        >
          Técnica
        </Link>

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
