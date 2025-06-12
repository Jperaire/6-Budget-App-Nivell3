import styles from "./WebOptions.module.css";
import infoIcon from "../../assets/images/info.png";

const WebOptions = ({ pages, setPages, languages, setLanguages }) => {
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

            {(pages === "" || pages < 1) && (
                <p className={styles.error}>
                    Cal indicar un nombre de pàgines vàlid.
                </p>
            )}

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

            {(languages === "" || languages < 1) && (
                <p className={styles.error}>
                    Cal indicar un nombre de pàgines vàlid.
                </p>
            )}
        </div>
    );
};

export default WebOptions;
