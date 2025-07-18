import TecnicaLine from "@/components/tecnicaline";


export default function tecnica() {
    return (
        <div className="mt-16 pt-20">
            <TecnicaLine
                imageSrc='images/tecnica/oitsuki.png'
                techniqueName="Oi-tsuki"
            />
            <TecnicaLine
                imageSrc='images/tecnica/gyakutsuki.png'
                techniqueName="Gyaku-tsuki"
            />
        </div>
    );
}