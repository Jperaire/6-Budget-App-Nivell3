export const calculateTotal = ({ selections, pages, languages, services }) => {
    let newTotal = services.reduce(
        (sum, service) =>
            selections[service.title] ? sum + service.price : sum,
        0
    );

    if (
        selections.Web &&
        pages !== "" &&
        languages !== "" &&
        (pages > 1 || languages > 1)
    ) {
        newTotal += (pages + languages) * 30;
    }

    return newTotal;
};
