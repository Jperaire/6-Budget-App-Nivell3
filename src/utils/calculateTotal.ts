interface Selections {
    [key: string]: boolean;
}

interface Service {
    title: string;
    price: number;
}

interface CalculateTotalParams {
    selections: Selections;
    pages: number;
    languages: number;
    services: Service[];
    isDiscountActive: boolean;
}

export const calculateTotal = ({
    selections,
    pages,
    languages,
    services,
    isDiscountActive = false,
}: CalculateTotalParams): number => {
    let newTotal = services.reduce(
        (sum, service) =>
            selections[service.title] ? sum + service.price : sum,
        0
    );

    if (selections.Web && (pages > 1 || languages > 1)) {
        newTotal += (pages + languages) * 30;
    }

    if (isDiscountActive) {
        newTotal *= 0.8;
    }

    return newTotal;
};
