import TecnicaLine from "@/components/tecnicaline";


export default function tsuki() {
    return (
        <div className="flex flex-col gap-2 mt-16 pt-20">
            <TecnicaLine
                imageSrc='/images/tecnica/oitsuki.png'
                techniqueName="Oi-tsuki"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/gyakutsuki.png'
                techniqueName="Gyaku-tsuki"
            />
        </div>
    );
}