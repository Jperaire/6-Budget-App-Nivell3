import styles from "./WebOptions.module.css";
import infoIcon from "../../assets/images/info.png";

interface WebOptionsProps {
    pages: number;
    setPages: React.Dispatch<React.SetStateAction<number>>;
    languages: number;
    setLanguages: React.Dispatch<React.SetStateAction<number>>;
}

const WebOptions = ({
    pages,
    setPages,
    languages,
    setLanguages,
}: WebOptionsProps) => {
    return (
        <div className={`${styles.options}`}>
            <div className={`${styles.option}`}>
                <div>
                    <img src={infoIcon} alt="Information Icon" />
                    <label>Nombre de pàgines: </label>
                </div>

                <div className={styles.counter}>
                    <button
                        type="button"
                        onClick={() =>
                            setPages((prev) => Math.max(1, prev - 1))
                        }
                    >
                        -
                    </button>
                    <p>{pages}</p>
                    <button
                        type="button"
                        onClick={() => setPages((prev) => prev + 1)}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className={`${styles.option}`}>
                <div>
                    <img src={infoIcon} alt="Information Icon" />
                    <label>Nombre de llenguatges:</label>
                </div>

                <div className={styles.counter}>
                    <button
                        type="button"
                        onClick={() =>
                            setLanguages((prev) => Math.max(1, prev - 1))
                        }
                    >
                        -
                    </button>
                    <p>{languages}</p>
                    <button
                        type="button"
                        onClick={() => setLanguages((prev) => prev + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WebOptions;
