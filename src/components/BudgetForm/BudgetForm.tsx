import styles from "./BudgetForm.module.css";
import { services } from "../../data/services.ts";
import Service from "../Service/Service.tsx";
import ResetButton from "../ResetButton/ResetButton.tsx";
import { useState, useEffect } from "react";
import { calculateTotal } from "../../utils/calculateTotal.ts";
import GetBudget from "../GetBudget/GetBudget.tsx";

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
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);

    useEffect(() => {
        const newTotal = calculateTotal({
            selections,
            pages,
            languages,
            services,
        });
        setTotal(newTotal);
    }, [selections, pages, languages]);

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
                    />
                ))}
                <div className={styles.budget}>
                    <p className={styles.p}>
                        Preu pressuposat: <span>{total}€</span>
                    </p>
                </div>
                <ResetButton />
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
