import { services } from "../data/services";

export function readBudgetParams(searchParams: URLSearchParams) {
    const selections: { [key: string]: boolean } = {};

    services.forEach((service) => {
        const value = searchParams.get(service.title);
        selections[service.title] = value === "true";
    });

    const pages = parseInt(searchParams.get("pages") || "1", 10);
    const languages = parseInt(searchParams.get("languages") || "1", 10);
    const isDiscountActive = searchParams.get("discount") === "true";

    return {
        selections,
        pages,
        languages,
        isDiscountActive,
    };
}
