import { bebasNeue } from "../../public/fonts/fonts";

interface YinyangProps {
  title: string;
  description: string;
  imageSrc1: string;
  imageAlt1: string;
  imageSrc2: string;
  imageAlt2: string;
}

export default function Yinyang({ title, description, imageSrc1, imageAlt1, imageSrc2, imageAlt2 }: YinyangProps) {
  return (
    <section className="bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-12">
        {/* Text */}
        <div className={`${bebasNeue.variable} w-full md:w-1/2 md:pr-10`}>
          <div className="w-8 h-0.5 bg-[var(--accent)] mb-4" />
          <h1 className="font-title text-5xl text-[var(--foreground)] font-bold mb-4 tracking-wide">
            {title}
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">{description}</p>
        </div>

        {/* Images */}
        <div className="relative w-full md:w-1/2 h-[300px] flex justify-center md:justify-end">
          <img
            src={imageSrc2}
            alt={imageAlt2}
            width={780}
            height={500}
            className="absolute z-10 w-full max-w-3xl object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
          />
          <img
            src={imageSrc1}
            alt={imageAlt1}
            width={780}
            height={500}
            className="absolute z-20 w-full max-w-3xl object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
