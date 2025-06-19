import styles from "./BudgetForm.module.css";
import { services } from "../../data/services.ts";
import Service from "../Service/Service.tsx";
import { useState, useContext } from "react";
import { calculateTotal } from "../../utils/calculateTotal.ts";
import GetBudget from "../GetBudget/GetBudget.tsx";
import { DiscountContext } from "../../context/DiscountContext/DiscountContext";
import { updateURL } from "../../utils/updateURL.ts";
import { useNavigate } from "react-router-dom";

interface Selections {
    [key: string]: boolean;
}

const BudgetForm: React.FC = () => {
    const navigate = useNavigate();

    const { isDiscountActive } = useContext(DiscountContext);

    const [selections, setSelections] = useState<Selections>({});
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);

    const total = calculateTotal({
        selections,
        pages,
        languages,
        services,
        isDiscountActive,
    });

    const handleChange = (serviceTitle: string, checked: boolean) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [serviceTitle]: checked,
        }));
        updateURL(navigate, selections, pages, languages, isDiscountActive);
    };

    return (
        <div className={`${styles.container} flex-center`}>
            <form>
                {services.map((service) => (
                    <Service
                        key={service.title}
                        service={service}
                        onChange={handleChange}
                        checked={selections[service.title] || false}
                        pages={pages}
                        setPages={setPages}
                        languages={languages}
                        setLanguages={setLanguages}
                        isDiscountActive={isDiscountActive}
                    />
                ))}
                <div className={styles.budget}>
                    <p className={styles.p}>
                        Preu pressuposat: <span>{total}€</span>
                    </p>
                </div>
            </form>
            <GetBudget
                total={total}
                pages={pages}
                languages={languages}
                selections={selections}
                setSelections={setSelections}
                setPages={setPages}
                setLanguages={setLanguages}
            />
        </div>
    );
};

export default BudgetForm;
