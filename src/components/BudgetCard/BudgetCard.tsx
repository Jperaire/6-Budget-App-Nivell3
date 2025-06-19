import styles from "./BudgetCard.module.css";
import shareIcon from "../../assets/images/share-icon.png";
import { shareURL } from "../../utils/shareURL";

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
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <button className={styles.button} onClick={shareURL}>
                    <img src={shareIcon} alt="Compartir pressupost" />
                </button>
            </div>
            <div className={styles.budget}>
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
        </div>
    );
};

export default BudgetCard;
