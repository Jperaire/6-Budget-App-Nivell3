import styles from "./WebOptions.module.css";
import InfoModal from "../InfoModal/InfoModal";
import { information } from "../../data/information";

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
        <div className={styles.options}>
            <div className={styles.option}>
                <div>
                    <InfoModal
                        modalTitle={information[1].title}
                        modalContent={information[1].description}
                    />
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

            <div className={styles.option}>
                <div>
                    <InfoModal
                        modalTitle={information[0].title}
                        modalContent={information[0].description}
                    />
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
