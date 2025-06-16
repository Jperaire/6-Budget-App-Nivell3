import styles from "./GetBudget.module.css";
import button from "../../styles/CommonButton/commonButton.module.css";
import { useState } from "react";
import BudgetList from "../BudgetList/BudgetList.tsx";
import { resetForm } from "../../utils/resetForm.ts";

interface Budget {
    id: Date;
    name: string;
    phone: string;
    email: string;
    total: number;
    ads: boolean;
    seo: boolean;
    web: boolean;
    languages: number;
    pages: number;
}

interface Selections {
    [key: string]: boolean;
}

interface GetBudgetProps {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    pages: number;
    setPages: React.Dispatch<React.SetStateAction<number>>;
    languages: number;
    setLanguages: React.Dispatch<React.SetStateAction<number>>;
    selections: Selections;
    setSelections: React.Dispatch<React.SetStateAction<Selections>>;
}

const GetBudget = ({
    total,
    setTotal,
    pages,
    setPages,
    languages,
    setLanguages,
    selections,
    setSelections,
}: GetBudgetProps) => {
    const [budgets, setBudgets] = useState<Budget[]>([
        {
            id: new Date(),
            name: "Ona Costa",
            phone: "666777888",
            email: "onacosta@gmail.com",
            ads: true,
            seo: true,
            web: true,
            languages: 5,
            pages: 3,
            total: 1440,
        },
    ]);

    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientEmail, setClientEmail] = useState("");

    const [error, setError] = useState<string | null>(null);

    const handleClick = () => {
        if (!clientName || !clientPhone || !clientEmail) {
            setError("Tots els camps han d'estar omplerts.");
            return;
        }

        if (total === 0) {
            setError("Si us plau, selecciona almenys un servei.");
            return;
        }
        const newBudget: Budget = {
            id: new Date(),
            name: clientName,
            phone: clientPhone,
            email: clientEmail,
            ads: selections.Ads,
            seo: selections.Seo,
            web: selections.Web,
            languages,
            pages,
            total,
        };
        setBudgets((prev) => [newBudget, ...prev]);

        setClientName("");
        setClientPhone("");
        setClientEmail("");
        setError(null);
        setTotal(0);
        resetForm({
            setSelections,
            setPages,
            setLanguages,
            setTotal,
        });
    };
    return (
        <>
            <div className={styles.container}>
                <h2>Demanar pressupost</h2>

                {error && <p className={styles.error}>{error}</p>}
                <form
                    className={styles.content}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        id="clientName"
                        placeholder="Nom"
                        onChange={(e) => setClientName(e.target.value)}
                        value={clientName}
                    />

                    <input
                        type="text"
                        id="clientPhone"
                        placeholder="Teléfon"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                    />
                    <input
                        type="email"
                        id="clientEmail"
                        placeholder="Email"
                        onChange={(e) => setClientEmail(e.target.value)}
                        value={clientEmail}
                    />

                    <button
                        type="button"
                        className={button.commonButton}
                        onClick={handleClick}
                    >
                        Sol·licitar pressupost →
                    </button>
                </form>
            </div>
            <BudgetList budgets={budgets} />
        </>
    );
};

export default GetBudget;
