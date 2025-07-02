import { bebasNeue } from "../../public/fonts/fonts";

interface HeroProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}


export default function Hero({title, description, imageSrc, imageAlt}: HeroProps) {
    return (
        <section className="bg-red-400 w-screen">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
            {/* Texto à esquerda */}
                <div className={`${bebasNeue.variable} w-full md:w-1/2 md:pr-10 mb-10 md:mb-0`}>
                    <h1 className="font-title text-8xl text-[var(--white)] font-bold mb-4">{title}</h1>
                    <p className="text-2xl text-[var(--white)] font-bold">{description}</p>
                </div>

            {/* Imagem à direita */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        width={580}
                        height={400}
                        className="w-full max-w-md object-contain"
                    />
                </div>
            </div>
        </section>
    );
}