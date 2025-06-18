import { createContext } from "react";

interface DiscountContextType {
    isDiscountActive: boolean;
    toggleDiscount: () => void;
}

export const DiscountContext = createContext<DiscountContextType | undefined>(
    undefined
);
