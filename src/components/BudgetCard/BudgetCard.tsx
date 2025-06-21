import styles from "./BudgetCard.module.css";
import ShareIcon from "../ShareIcon/ShareIcon";

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
    isShareable?: boolean;
}

const BudgetCard = ({ budget, isShareable = true }: BudgetCardProps) => {
    const handleShareCard = () => {
        const { name, email, phone, total, seo, ads, web, pages, languages } =
            budget;

        const params = new URLSearchParams({
            name,
            email,
            phone,
            total: total.toString(),
            seo: seo.toString(),
            ads: ads.toString(),
            web: web.toString(),
            pages: pages.toString(),
            languages: languages.toString(),
        });

        const url = `${
            window.location.origin
        }/budget/view?${params.toString()}`;

        navigator.clipboard.writeText(url);

        alert("Pressupost copiat!");
    };

    return (
        <div className={styles.container}>
            {isShareable && <ShareIcon onClick={handleShareCard} />}
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
