import TecnicaLine from "@/components/tecnicaline";


export default function uke() {
    return (
        <div className="flex flex-col gap-2 mt-16 pt-20">
            <TecnicaLine
                imageSrc='/images/tecnica/ageuke.png'
                techniqueName="Age-uke"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/shutouke.png'
                techniqueName="Shuto-uke"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/gedanbarai.png'
                techniqueName="Gedan-barai"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/sotouke.png'
                techniqueName="Soto-uke"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/udeuke.png'
                techniqueName="Ude-uke"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/haishuuke.png'
                techniqueName="Haishu-uke"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/nagashiuke.png'
                techniqueName="Nagashi-uke"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/kokenuke.png'
                techniqueName="Koken-uke"
            />
        </div>
    );
}