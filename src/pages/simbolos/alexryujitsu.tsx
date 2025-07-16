import KanjiShower from "@/components/kanjishower";
import { bebasNeue } from "../../../public/fonts/fonts";
import YinyangTable from "@/components/yinyang";
import ColorPalette from "@/components/colorpalette";


export default function alexryujitsu() {
    return(
        <>  
            <div className="flex flex-col gap-10 bg-red-100 pt-20">
                <div className={`${bebasNeue.variable} flex flex-col p-10 bg-red-100 text-center`}>
                    <h1 className="p-8 text-7xl font-title ml-3">Símbolo do Alex Ryu Jitsu</h1>
                    <KanjiShower
                        scale={1.2}
                    />
                </div>
                <div className="flex justify-center mt-12 animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="h-[2px] w-full my-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <div className="">
                    <YinyangTable/>
                </div>
                <div className="h-[2px] w-full my-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <div>
                    <ColorPalette/>
                </div>
            </div>
        </>
    );
}