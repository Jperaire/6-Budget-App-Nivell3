export const calculateDiscountedPrice = (
    price: number,
    discount: number
): number => {
    return price * (1 - discount);
};
