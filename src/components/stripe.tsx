import { bebasNeue } from "../../public/fonts/fonts";

type StripeProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  
export default function GradeStripe({ imageSrc, imageAlt, title, description }: StripeProps) {
    return (
        <div className="flex items-center bg-gray-100 rounded-xl px-6 py-4 shadow-md mb-6 mx-auto max-w-4xl w-full">
            {/* Imagem */}
            <div className="flex-shrink-0 ml-16">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-40 h-40 object-contain"
                />
            </div>
  
            {/* Texto */}
            <div className={`${bebasNeue.variable} flex flex-col mx-auto`}>
                <h3 className="text-4xl font-semibold text-gray-800 font-title">{title}</h3>
                <p className="text-lg text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
}
  