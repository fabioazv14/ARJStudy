import { bebasNeue } from "../../public/fonts/fonts";
import { useEffect, useState } from "react";

interface HeroProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    bgcolor: string;
    textcolor: string;
    textsize: string;
}


export default function Hero({title, description, imageSrc, imageAlt, bgcolor, textcolor, textsize}: HeroProps) {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = Math.max(1-scrollY / 300, 0);
    const translateY = Math.min(scrollY / 5, 100);

    return (
        <section className={`bg-${bgcolor} w-screen pt-20`}>
            <div 
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-30"
                style={{
                    opacity,
                    transform: `translateY(-${translateY}px)`
                }}
            >
                {/* Texto à esquerda */}
                <div className={`${bebasNeue.variable} w-full md:w-1/2 md:pr-10 mb-10 md:mb-0`}>
                    <h1 className={`font-title text-${textsize} text-[var(--${textcolor})] font-bold mb-4`}>{title}</h1>
                    <p className={`text-2xl text-[var(--${textcolor})] font-bold`}>{description}</p>
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