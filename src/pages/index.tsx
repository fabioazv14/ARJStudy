import Hero from "@/components/hero"
import Card from "@/components/card";


export default function Home() {
  return (
    <>
      <Hero
        title = "ARJ Study"
        description = "Aprende a arte Alex Ryu Jitsu, a sua historia, os seus simbolos, as graduações e muito mais..."
        imageSrc = "/images/arjlogowhite.svg"
        imageAlt = "ARJLOGO"
      />

      <div className="flex justify-center space-x-6 px-6 py-10">
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
