import Link from "next/link";
import { Fjalla_One } from "next/font/google"

const fjallaOne = Fjalla_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-fjalla-one",
});

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between px-4 py-0 bg-red-400">
            {/* Logo e nome */}
            <div className="flex items-center">
                <img
                    src = "/images/arjlogo.svg"
                    alt = "ARJLOGO"
                    width = {40}
                    height = {40}
                    className="mr-3"
                />
                <span className="text-2xl font-bold">ARJ Study</span>
            </div>


            {/* Rotas */}
            <div className={`${fjallaOne.variable} flex space-x-0`}>
                <Link href="/historia/" className="font-navbut text-2xl block px-8 py-6 bg-red-400 hover:bg-red-500 transition">História</Link>
                <Link href="/" className="font-navbut text-2xl block px-8 py-6 bg-red-400 hover:bg-red-500 transition">Símbolos</Link>
            </div>
        </nav>
    );
}