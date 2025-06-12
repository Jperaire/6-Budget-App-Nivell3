import styles from "./TotalBudget.module.css";
import Service from "../Service/Service.jsx";
import { services } from "../../data/services.js";
import Header from "../Header/Header.jsx";
import { useState, useEffect } from "react";
import WebOptions from "../WebOptions/WebOptions.jsx";

const TotalBudget = () => {
    const [selections, setSelections] = useState({
        Seo: false,
        Ads: false,
        Web: false,
    });

    const [total, setTotal] = useState(0);

    const [pages, setPages] = useState(1);
    const [languages, setLanguages] = useState(1);

    useEffect(() => {
        let newTotal = 0;

        services.forEach((service) => {
            if (selections[service.title]) {
                newTotal += service.price;
            }
        });

        if (selections.Web) {
            newTotal += (pages + languages) * 30;
        }

        setTotal(newTotal);
    }, [selections, pages, languages]);

    const handleChange = (serviceTitle, checked) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [serviceTitle]: checked,
        }));
    };

    const resetForm = () => {
        setSelections({
            Seo: false,
            Ads: false,
            Web: false,
        });
        setPages(1);
        setLanguages(1);
        setTotal(0);
    };

    return (
        <>
            <Header />
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
            </form>

            <div className={styles.budget}>
                <p className={styles.p}>
                    Preu pressuposat: <span>{total}€</span>
                </p>
                <button
                    type="button"
                    onClick={resetForm}
                    className={styles.resetButton}
                >
                    Reiniciar
                </button>
            </div>
        </>
    );
};

export default TotalBudget;
