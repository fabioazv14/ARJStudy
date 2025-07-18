import React from 'react';
import { bebasNeue } from '../../public/fonts/fonts';

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
        <div className={`${bebasNeue.variable} flex flex-col mr-40`}>
            <h3 className="text-5xl font-semibold text-gray-900 font-title">{techniqueName}</h3>
            <div className="mt-1 w-16 h-1 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 rounded"></div>
        </div>
      </div>
    </div>
  );
}
