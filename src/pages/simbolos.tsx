import Symbol from "@/components/symbol";
import KanjiShower from "@/components/kanjishower";
import { bebasNeue } from "../../public/fonts/fonts";
import Hero from "@/components/hero";


export default function simbolos() {
    return(
        <>  <div className="flex flex-col gap-30 bg-red-100">
                <div className={`${bebasNeue.variable} flex flex-col p-10 bg-red-100 text-center`}>
                    <h1 className="p-8 text-8xl font-title ml-3">Símbolo do Alex Ryu Jitsu</h1>
                    <KanjiShower
                        scale={1.2}
                    />
                </div>
                <div className="">
                    <Hero
                        title="YinYang"
                        description="Texto descritivo de YinYang"
                        imageSrc="/images/yinyang.png"
                        imageAlt="YinYang"
                        bgcolor="red-100"
                        textcolor="black"
                        textsize="6xl"
                    />
                </div>
            </div>
        </>
    );
}