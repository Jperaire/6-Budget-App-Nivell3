interface Service {
    title: string;
    description: string;
    price: number;
    hasOptions: boolean;
}

export const services: Service[] = [
    {
        title: "Seo",
        description: "Programació d'una web responsive completa",
        price: 300,
        hasOptions: false,
    },
    {
        title: "Ads",
        description: "Programació d'una web responsive completa",
        price: 400,
        hasOptions: false,
    },
    {
        title: "Web",
        description: "Programació d'una web responsive completa",
        price: 500,
        hasOptions: true,
    },
];
