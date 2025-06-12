import { useState, useEffect } from "react";
import styles from "./BudgetPage.module.css";
import { services } from "../../data/services.js";
import Header from "../../components/Header/Header.jsx";
import Service from "../../components/Service/Service.jsx";

const BudgetPage = () => {
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

        if (
            selections.Web &&
            pages !== "" &&
            languages !== "" &&
            (pages > 1 || languages > 1)
        ) {
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
                <div className={styles.budget}>
                    <p className={styles.p}>
                        Preu pressuposat: <span>{total}€</span>
                    </p>
                    <button
                        type="button"
                        onClick={resetForm}
                        className={styles.resetButton}
                    >
                        REINICIA
                    </button>
                </div>
            </form>
        </>
    );
};

export default BudgetPage;
