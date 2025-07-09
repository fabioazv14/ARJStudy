import KanjiShower from "@/components/kanjishower";
import { bebasNeue } from "../../public/fonts/fonts";
import YinyangTable from "@/components/yinyang";


export default function simbolos() {
    return(
        <>  <div className="flex flex-col gap-50 bg-red-100">
                <div className={`${bebasNeue.variable} flex flex-col p-10 bg-red-100 text-center`}>
                    <h1 className="p-8 text-8xl font-title ml-3">Símbolo do Alex Ryu Jitsu</h1>
                    <KanjiShower
                        scale={1.2}
                    />
                </div>
                <div className="">
                    <YinyangTable/>
                </div>
            </div>
        </>
    );
}