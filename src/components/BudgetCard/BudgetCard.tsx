import styles from "./BudgetCard.module.css";

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

interface BudgetCardProps {
    budget: Budget;
}

const BudgetCard = ({ budget }: BudgetCardProps) => {
    return (
        <div className={styles.budget}>
            {" "}
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
    );
};

export default BudgetCard;
