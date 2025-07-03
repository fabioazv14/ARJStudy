type SymbolProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  
  export default function Symbol({ imageSrc, imageAlt, title, description }: SymbolProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center max-w-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-120 h-120 object-contain drop-shadow-2xl"
                />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-base">{description}</p>
        </div>
    );
  }
  