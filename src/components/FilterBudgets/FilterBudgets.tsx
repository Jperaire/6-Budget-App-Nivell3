import styles from "./FilterBudgets.module.css";

interface Props {
    onSortByDate: () => void;
    onSortByName: () => void;
    onReset: () => void;
}

const FilterBudgets = ({ onSortByDate, onSortByName, onReset }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.search}></div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={onSortByName}>
                    Nom
                </button>
                <button className={styles.button} onClick={onSortByDate}>
                    Data
                </button>
                <button className={styles.button} onClick={onReset}>
                    Reinicia
                </button>
            </div>
        </div>
    );
};

export default FilterBudgets;
