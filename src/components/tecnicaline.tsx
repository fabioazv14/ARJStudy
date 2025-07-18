import React from 'react';

type TecnicaLineProps = {
  imageSrc: string;
  techniqueName: string;
  altText?: string;
};

export default function TecnicaLine({ imageSrc, techniqueName, altText }: TecnicaLineProps) {
  return (
    <div className="flex items-center justify-start gap-120 space-x-6 bg-white rounded-lg shadow-md p-5 px-80 cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="overflow-hidden rounded-lg w-50 h-64 flex-shrink-0">
        <img
          src={imageSrc}
          alt={altText || techniqueName}
          className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className=''>
        <div className="flex flex-col mr-40 bg-amber-">
            <h3 className="text-4xl font-semibold text-gray-900">{techniqueName}</h3>
            <div className="mt-1 w-12 h-1 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 rounded"></div>
        </div>
      </div>
    </div>
  );
}
