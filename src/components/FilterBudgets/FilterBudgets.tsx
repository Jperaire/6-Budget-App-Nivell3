import styles from "./FilterBudgets.module.css";

interface Props {
    onSortByDate: () => void;
    onSortByImport: () => void;
    onReset: () => void;
    sortBy: "date" | "import" | null;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBudgets = ({
    onSortByDate,
    onSortByImport,
    onReset,
    sortBy,
    search,
    setSearch,
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cerca per nom, email o telèfon"
                    className={styles.input}
                />
            </div>

            <div className={styles.buttons}>
                <button
                    className={`${styles.button} ${
                        sortBy === "date" ? styles.active : ""
                    }`}
                    onClick={onSortByDate}
                >
                    Data
                </button>
                <button
                    className={`${styles.button} ${
                        sortBy === "import" ? styles.active : ""
                    }`}
                    onClick={onSortByImport}
                >
                    Import
                </button>
                <button
                    className={`${styles.button} ${
                        sortBy === null ? styles.active : ""
                    }`}
                    onClick={onReset}
                >
                    Reinicia
                </button>
            </div>
        </div>
    );
};

export default FilterBudgets;
