import TecnicaLine from "@/components/tecnicaline";


export default function gueri() {
    return (
        <div className="flex flex-col gap-2 mt-16 pt-20">
            <TecnicaLine
                imageSrc='/images/tecnica/maegueri.png'
                techniqueName="Mae-gueri"
            />
            <TecnicaLine
                imageSrc='/images/tecnica/mawashigeri.jpg'
                techniqueName="Mawashi-gueri"
            />
        </div>
    );
}