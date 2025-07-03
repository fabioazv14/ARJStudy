import Symbol from "@/components/symbol";
import KanjiShower from "@/components/kanjishower";
import { bebasNeue } from "../../public/fonts/fonts";


export default function simbolos() {
    return(
        <>      
            <div className={`${bebasNeue.variable} flex flex-col p-10`}>
                <h1 className="flex p-8 text-6xl font-title ml-3">Símbolo do Alex Ryu Jitsu</h1>
                <KanjiShower
                    scale={1.2}
                />
            </div>
        </>
    );
}