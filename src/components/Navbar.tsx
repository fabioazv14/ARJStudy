import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between px-4 py-0 bg-red-400">
            {/* Logo e nome */}
            <div className="flex items-center">
                <img
                    src = "/arjlogo.svg"
                    alt = "ARJLOGO"
                    width = {40}
                    height = {40}
                    className="mr-3"
                />
                <span className="text-2xl font-bold">ARJ Study</span>
            </div>


            {/* Rotas */}
            <div className="flex space-x-0">
                <Link href="/" className="block px-8 py-6 bg-red-400 hover:bg-red-500 transition">História</Link>
                <Link href="/" className="block px-8 py-6 bg-red-400 hover:bg-red-500 transition">Símbolos</Link>
            </div>
        </nav>
    );
}