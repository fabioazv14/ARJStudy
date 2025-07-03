import Stripe from "@/components/stripe";


export default function graduacoes() {
    return(
        <div className="flex flex-col mt-16">
            <Stripe
                imageSrc="/images/belts/whitebelt.png"
                imageAlt="Cinto Branco"
                title="9º KYU"
                description="Cinto Branco"
            />
            <Stripe
                imageSrc="/images/belts/yellowbelt.png"
                imageAlt="Cinto Amarelo"
                title="8º KYU"
                description="Cinto Amarelo"
            />
            <Stripe
                imageSrc="/images/belts/orangebelt.png"
                imageAlt="Cinto Laranja"
                title="7º KYU"
                description="Cinto Laranja"
            />
        </div>
    );
}