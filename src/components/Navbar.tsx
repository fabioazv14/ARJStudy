import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between px-6 py-4 bg-red-400">
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
            <div className="flex space-x-10">
                <Link href="/" className="text-gray-700 hover:text-gray-950">História</Link>
                <Link href="/" className="text-gray-700 hover:text-gray-950">Símbolos</Link>
            </div>
        </nav>
    );
}