import styles from "./BudgetList.module.css";
import FilterBudgets from "../FilterBudgets/FilterBudgets";
import BudgetCard from "../BudgetCard/BudgetCard.tsx";

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
    onSortByDate: () => void;
    onSortByImport: () => void;
    onReset: () => void;
    sortBy: "date" | "import" | null;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const BudgetList: React.FC<BudgetListProps> = ({
    budgets,
    onSortByDate,
    onSortByImport,
    onReset,
    sortBy,
    search,
    setSearch,
}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Pressupostos en curs:</h2>

            <FilterBudgets
                onSortByDate={onSortByDate}
                onSortByImport={onSortByImport}
                onReset={onReset}
                sortBy={sortBy}
                search={search}
                setSearch={setSearch}
            />

            <div className={styles.budgets}>
                {budgets.map((budget) => (
                    <BudgetCard key={budget.id.toString()} budget={budget} />
                ))}
            </div>
        </div>
    );
};

export default BudgetList;
