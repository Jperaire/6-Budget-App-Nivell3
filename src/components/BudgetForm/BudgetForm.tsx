import styles from "./BudgetForm.module.css";
import { services } from "../../data/services.ts";
import Service from "../Service/Service.tsx";
import { useState, useEffect, useContext } from "react";
import { calculateTotal } from "../../utils/calculateTotal.ts";
import GetBudget from "../GetBudget/GetBudget.tsx";
import { DiscountContext } from "../../context/DiscountContext/DiscountContext";

interface Selections {
    [key: string]: boolean;
}

const BudgetForm: React.FC = () => {
    const [selections, setSelections] = useState<Selections>({
        Seo: false,
        Ads: false,
        Web: false,
    });

    const [total, setTotal] = useState<number>(0);
    const { isDiscountActive } = useContext(DiscountContext);
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);

    useEffect(() => {
        const newTotal = calculateTotal({
            selections,
            pages,
            languages,
            services,
            isDiscountActive,
        });
        setTotal(newTotal);
    }, [selections, pages, languages, isDiscountActive]);

    const handleChange = (serviceTitle: string, checked: boolean) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [serviceTitle]: checked,
        }));
    };

    return (
        <div className={`${styles.container} flex-center`}>
            <form>
                {services.map((service) => (
                    <Service
                        key={service.title}
                        service={service}
                        onChange={handleChange}
                        checked={selections[service.title]}
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
                setTotal={setTotal}
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
