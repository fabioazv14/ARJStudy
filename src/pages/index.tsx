import Hero from "@/components/hero"
import Card from "@/components/card";


export default function Home() {
  return (
    <>
      <Hero
        title = "ARJ Study"
        description = "Aprende a arte Alex Ryu Jitsu, a sua historia, os seus simbolos, as graduações e muito mais..."
        imageSrc = "/images/arj/arjlogowhite.svg"
        imageAlt = "ARJLOGO"
        bgcolor="red-400"
        textcolor="white"
        textsize="8xl"
      />

      <div className="flex justify-center space-x-18 px-6 py-10">
        <Card
          imageSrc = "/images/mestrealexcarv.png"
          imageAlt = "MESTREALEX"
          title = "História"
          linkHref = "/historia"
          linkText = "Ver história"
        />
        <Card
          imageSrc = "/images/arj/arjcolor.png"
          imageAlt = "ARJLOGO"
          title = "Símbolos"
          linkHref = "/simbolos"
          linkText = "Ver símbolos"
        />
        <Card
          imageSrc = "/images/belts.webp"
          imageAlt = "BELTS"
          title = "Graduações"
          linkHref = "/graduacoes"
          linkText = "Ver graduações"
        />
      </div>
    </>
  );
}
