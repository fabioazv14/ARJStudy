import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { bebasNeue } from "../../public/fonts/fonts";

interface CardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    linkHref: string;
    linkText: string;
};


export default function Card({ imageSrc, imageAlt, title, linkHref, linkText }: CardProps) {
  return (
    <div className="max-w-sm w-70 rounded-4xl overflow-hidden shadow-xl bg-gradient-to-b from-red-400 to-gray-100 flex flex-col">
        <div className={`${bebasNeue.variable} px-6 py-4 flex-grow mx-auto`}>
            <h2 className="font-bold text-4xl text-[var(--white)] mb-2 font-title">{title}</h2>
        </div>
        <img 
            className="w-full h-70 object-cover mb-5 p-4" 
            src={imageSrc} 
            alt={imageAlt}
        />
        <div className="px-6 pb-4 mx-auto">
            <Link href={linkHref} className="w-50 h-12 inline-block bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-500 transition text-lg text-center">{linkText}</Link>
        </div>
    </div>
  );
}
