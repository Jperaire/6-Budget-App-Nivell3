import styles from "./BudgetForm.module.css";
import { services } from "../../data/services.js";
import Service from "../Service/Service.jsx";
import ResetButton from "../ResetButton/ResetButton.jsx";
import { useState, useEffect } from "react";
import { calculateTotal } from "../../utils/calculateTotal.js";

const BudgetForm = () => {
    const [selections, setSelections] = useState({
        Seo: false,
        Ads: false,
        Web: false,
    });

    const [total, setTotal] = useState(0);

    const [pages, setPages] = useState(1);
    const [languages, setLanguages] = useState(1);

    useEffect(() => {
        const newTotal = calculateTotal({
            selections,
            pages,
            languages,
            services,
        });
        setTotal(newTotal);
    }, [selections, pages, languages]);

    const handleChange = (serviceTitle, checked) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [serviceTitle]: checked,
        }));
    };
    return (
        <form className={`${styles.container} flex-center`}>
            {services.map((service) => {
                return (
                    <Service
                        service={service}
                        key={service.title}
                        onChange={handleChange}
                        checked={selections[service.title]}
                        pages={pages}
                        setPages={setPages}
                        languages={languages}
                        setLanguages={setLanguages}
                    />
                );
            })}
            <div className={styles.budget}>
                <p className={styles.p}>
                    Preu pressuposat: <span>{total}€</span>
                </p>
            </div>
            <ResetButton
                setLanguages={setLanguages}
                setPages={setPages}
                setTotal={setTotal}
                setSelections={setSelections}
            />
        </form>
    );
};

export default BudgetForm;
