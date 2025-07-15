import Link from "next/link";
import { fjallaOne, bebasNeue } from "../../public/fonts/fonts";
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-400 z-50 flex items-center justify-between px-4 py-0 bg-red-300 rounded-2xl mt-5">
      {/* Logo e nome */}
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
            router.pathname === '/historia'
                ? 'bg-red-500'
                : 'bg-red-300 hover:bg-red-500'
          }`}
        >
          História
        </Link>

        <Link
          href="/simbolos/"
          className={`font-navbut text-2xl block px-8 py-6 transition ${
            router.pathname === '/simbolos'
                ? 'bg-red-500'
                : 'bg-red-300 hover:bg-red-500'
          }`}
        >
          Símbolos
        </Link>

        <Link
          href="/graduacoes/"
          className={`font-navbut text-2xl block px-8 py-6 transition ${
            router.pathname === '/graduacoes'
                ? 'bg-red-500'
                : 'bg-red-300 hover:bg-red-500'
          }`}
        >
          Graduações
        </Link>
      </div>
    </nav>
  );
}
