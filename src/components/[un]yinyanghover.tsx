import { bebasNeue } from "../../public/fonts/fonts";

interface YinyangProps {
    title: string;
    description: string;
    imageSrc1: string;
    imageAlt1: string;
    imageSrc2: string;
    imageAlt2: string;
    bgcolor: string;
    textcolor: string;
}


export default function Yinyang({title, description, imageSrc1, imageAlt1, imageSrc2, imageAlt2, bgcolor, textcolor}: YinyangProps) {
    return (
        <section className={`bg-${bgcolor} w-screen`}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
            {/* Texto à esquerda */}
                <div className={`${bebasNeue.variable} w-full md:w-1/2 md:pr-10 mb-10 md:mb-0`}>
                    <h1 className={`font-title text-6xl text-[var(--${textcolor})] font-bold mb-4`}>{title}</h1>
                    <p className={`text-2xl text-[var(--${textcolor})] font-bold`}>{description}</p>
                </div>

            {/* Imagem à direita */}
            <div className="relative w-full md:w-1/2 h-[300px] flex justify-center md:justify-end">
                {/* Yang (imagem de baixo) */}
                <img
                    src={imageSrc2}
                    alt={imageAlt2}
                    width={780}
                    height={500}
                    className="absolute z-10 w-full max-w-3xl object-contain transition-transform duration-300 ease-in-out hover:scale-125 hover:drop-shadow-2xl"
                />

                {/* Yin (imagem de cima, sem bloquear o rato) */}
                <img
                    src={imageSrc1}
                    alt={imageAlt1}
                    width={780}
                    height={500}
                    className="absolute z-20 w-full max-w-3xl object-contain transition-transform duration-300 ease-in-out hover:scale-125 hover:drop-shadow-2xl pointer-events-none"
                />
                </div>
            </div>
        </section>
    );
}
