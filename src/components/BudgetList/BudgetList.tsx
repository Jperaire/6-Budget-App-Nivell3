import styles from "./BudgetList.module.css";
import FilterBudgets from "../FilterBudgets/FilterBudgets";

interface Budget {
    id: Date;
    name: string;
    phone: string;
    email: string;
    total: number;
    seo: boolean;
    ads: boolean;
    web: boolean;
    pages: number;
    languages: number;
}

interface BudgetListProps {
    budgets: Budget[];
}

const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
    return (
        <>
            <h2>Pressupostos en curs:</h2>
            <FilterBudgets />
            {budgets.map((budget) => (
                <div key={budget.id.toString()} className={styles.container}>
                    <div className={styles.firstCol}>
                        <h3>{budget.name}</h3>
                        <p>{budget.email}</p>
                        <p>{budget.phone}</p>
                    </div>
                    <div className={styles.secondCol}>
                        <h4>Serveis contractats:</h4>
                        <ul>
                            {budget.seo && <li>✓ SEO</li>}
                            {budget.ads && <li>✓ Ads</li>}
                            {budget.web && (
                                <li>{`✓ Web (${budget.pages} pàgines, ${budget.languages} llenguatges)`}</li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.thirdCol}>
                        <h4>Total:</h4>
                        <p>{budget.total}€</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BudgetList;
