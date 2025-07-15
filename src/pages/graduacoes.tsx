import Stripe from "@/components/stripe";


export default function graduacoes() {
    return(
        <div className="flex flex-col mt-16 pt-20">
            <Stripe
                imageSrc="/images/belts/whitebelt.png"
                imageAlt="Cinto Branco"
                title="9º KYU"
                description="Cinto Branco"
                color="white"
            />
            <Stripe
                imageSrc="/images/belts/yellowbelt.png"
                imageAlt="Cinto Amarelo"
                title="8º KYU"
                description="Cinto Amarelo"
                color="yellow"
            />
            <Stripe
                imageSrc="/images/belts/orangebelt.png"
                imageAlt="Cinto Laranja"
                title="7º KYU"
                description="Cinto Laranja"
                color="orange"
            />
            <Stripe
                imageSrc="/images/belts/greenbelt.png"
                imageAlt="Cinto Verde"
                title="6º KYU"
                description="Cinto Verde"
                color="green"
            />
            <Stripe
                imageSrc="/images/belts/bluebelt.png"
                imageAlt="Cinto Azul"
                title="5º KYU"
                description="Cinto Azul"
                color="blue"
            />
            <Stripe
                imageSrc="/images/belts/purplebelt.png"
                imageAlt="Cinto Roxo"
                title="4º KYU"
                description="Cinto Roxo"
                color="purple"
            />
            <Stripe
                imageSrc="/images/belts/redbelt.png"
                imageAlt="Cinto Vermelho"
                title="3º KYU"
                description="Cinto Vermelho"
                color="red"
            />
            <Stripe
                imageSrc="/images/belts/brown1belt.png"
                imageAlt="Cinto Castanho 1"
                title="2º KYU"
                description="Cinto Castanho (1 lista dourada)"
                color="brown"
            />
            <Stripe
                imageSrc="/images/belts/brown2belt.png"
                imageAlt="Cinto Castanho 2"
                title="1º KYU"
                description="Cinto Castanho (2 listas douradas)"
                color="brown"
            />
        </div>
    );
}