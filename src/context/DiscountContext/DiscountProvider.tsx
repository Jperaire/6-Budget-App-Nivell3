import { useState } from "react";
import { DiscountContext } from "./DiscountContext";

interface DiscountProviderProps {
    children: React.ReactNode;
}

export const DiscountProvider: React.FC<DiscountProviderProps> = ({
    children,
}) => {
    const [isDiscountActive, setIsDiscountActive] = useState<boolean>(false);

    const toggleDiscount = () => {
        setIsDiscountActive((prev) => !prev);
    };

    return (
        <DiscountContext.Provider value={{ isDiscountActive, toggleDiscount }}>
            {children}
        </DiscountContext.Provider>
    );
};
