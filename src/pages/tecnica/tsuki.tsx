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
            <TecnicaLine
                imageSrc='/images/tecnica/tatetsuki.png'
                techniqueName="Tate-tsuki"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/teishuushi.png'
                techniqueName="Teishu-ushi"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/tubitsuki.png'
                techniqueName="Tubi-tsuki"
            />
        </div>
    );
}