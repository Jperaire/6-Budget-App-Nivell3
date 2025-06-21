import styles from "./BudgetForm.module.css";
import { services } from "../../data/services.ts";
import Service from "../Service/Service.tsx";
import { useState, useContext, useEffect } from "react";
import { calculateTotal } from "../../utils/calculateTotal.ts";
import GetBudget from "../GetBudget/GetBudget.tsx";
import { DiscountContext } from "../../context/DiscountContext/DiscountContext";
import { createURL } from "../../utils/createURL.ts";
import { useSearchParams } from "react-router-dom";
import ShareIcon from "../ShareIcon/ShareIcon.tsx";

interface Selections {
    [key: string]: boolean;
}

const BudgetForm: React.FC = () => {
    const [searchParams] = useSearchParams();

    const { isDiscountActive, setIsDiscountActive } =
        useContext(DiscountContext);

    const initialSelections: Selections = {
        Seo: searchParams.get("seo") === "true",
        Ads: searchParams.get("ads") === "true",
        Web: searchParams.get("web") === "true",
    };

    const initialPages = parseInt(searchParams.get("pages") || "1", 10);
    const initialLanguages = parseInt(searchParams.get("languages") || "1", 10);
    const discountFromURL = searchParams.get("discount") === "true";

    const [selections, setSelections] = useState<Selections>(initialSelections);
    const [pages, setPages] = useState<number>(
        isNaN(initialPages) ? 1 : initialPages
    );
    const [languages, setLanguages] = useState<number>(
        isNaN(initialLanguages) ? 1 : initialLanguages
    );

    useEffect(() => {
        setIsDiscountActive(discountFromURL);
        window.history.replaceState({}, "", "/budget");
    }, [discountFromURL, setIsDiscountActive]);

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
    };

    const handleShareURLClick = () => {
        alert(
            `Comparteix la teva selecció: ${createURL(
                selections,
                pages,
                languages,
                isDiscountActive
            )}`
        );
    };

    return (
        <div className={`${styles.container} flex-center`}>
            <ShareIcon onClick={handleShareURLClick} />
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
