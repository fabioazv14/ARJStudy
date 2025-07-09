import { bebasNeue } from "../../public/fonts/fonts";

type StripeProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    color: string;
  };

const gradientClasses: Record<string, string> = {
    white: 'from-gray-300 to-gray-100',
    yellow: 'from-yellow-200 to-gray-100',
    orange: 'from-orange-200 to-gray-100',
    green: 'from-green-200 to-gray-100',
    blue: 'from-blue-200 to-gray-100',
    purple: 'from-purple-200 to-gray-100',
    red: 'from-red-200 to-gray-100',
    brown: 'from-[var(--lightbrown)] to-gray-100',
    black: 'from-zinc-800 to-gray-100',
};

  

  
export default function GradeStripe({ imageSrc, imageAlt, title, description, color }: StripeProps) {

    const gradient = gradientClasses[color] || "from-white to-gray-100"

    return (
        <div className={`flex items-center rounded-xl px-6 py-4 shadow-lg mb-6 mx-auto max-w-4xl w-full hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out bg-gradient-to-b ${gradient}`}>
            {/* Imagem */}
            <div className="flex-shrink-0 ml-16">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-40 h-40 object-contain"
                />
            </div>
  
            {/* Texto */}
            <div className={`${bebasNeue.variable} flex flex-col ml-70`}>
                <h3 className="text-4xl font-semibold text-gray-800 font-title">{title}</h3>
                <p className="text-lg text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
}
  