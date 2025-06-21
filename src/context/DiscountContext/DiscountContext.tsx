import { createContext } from "react";

interface DiscountContextType {
    isDiscountActive: boolean;
    setIsDiscountActive: (active: boolean) => void;
}

export const DiscountContext = createContext<DiscountContextType>({
    isDiscountActive: false,
    setIsDiscountActive: () => {},
});
