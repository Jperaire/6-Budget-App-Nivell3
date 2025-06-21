import { useState } from "react";
import { DiscountContext } from "./DiscountContext";

interface DiscountProviderProps {
    children: React.ReactNode;
}

export const DiscountProvider: React.FC<DiscountProviderProps> = ({
    children,
}) => {
    const [isDiscountActive, setIsDiscountActive] = useState<boolean>(false);

    return (
        <DiscountContext.Provider
            value={{ isDiscountActive, setIsDiscountActive }}
        >
            {children}
        </DiscountContext.Provider>
    );
};
