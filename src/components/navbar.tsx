import Link from "next/link";
import { fjallaOne, bebasNeue } from "../../public/fonts/fonts";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between px-4 py-0 bg-red-400">
            {/* Logo e nome */}
            <div className={`${bebasNeue.variable} flex items-center`}>
                <img
                    src = "/images/arj/arjlogoblack.svg"
                    alt = "ARJLOGO"
                    width = {40}
                    height = {40}
                    className="mr-3"
                />
                <Link href="/" className="font-title text-4xl font-bold">ARJ Study</Link>
            </div>


            {/* Rotas */}
            <div className={`${fjallaOne.variable} flex space-x-0`}>
                <Link href="/historia/" className="font-navbut text-2xl block px-8 py-6 bg-red-400 hover:bg-red-500 transition">História</Link>
                <Link href="/simbolos/" className="font-navbut text-2xl block px-8 py-6 bg-red-400 hover:bg-red-500 transition">Símbolos</Link>
                <Link href="/graduacoes/" className="font-navbut text-2xl block px-8 py-6 bg-red-400 hover:bg-red-500 transition">Graduações</Link>
            </div>
        </nav>
    );
}