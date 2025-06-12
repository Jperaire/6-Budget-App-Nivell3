import styles from "./WebOptions.module.css";
import infoIcon from "../../assets/images/info.png";

const WebOptions = ({ pages, setPages, languages, setLanguages }) => {
    return (
        <div className={`${styles.options} flex-center`}>
            <div className={`${styles.option} flex-center`}>
                <img
                    src={infoIcon}
                    alt="Information Icon"
                    className={styles.img}
                />
                <label className={styles.p}>Nombre de pàgines: </label>
                <input
                    type="number"
                    className={styles.input}
                    onChange={(e) => setPages(Number(e.target.value))}
                    value={pages}
                />
            </div>

            <div className={`${styles.option} flex-center`}>
                <img
                    src={infoIcon}
                    alt="Information Icon"
                    className={styles.img}
                />
                <label className={styles.p}>Nombre de llenguatges:</label>
                <input
                    type="number"
                    className={styles.input}
                    onChange={(e) => setLanguages(e.target.value)}
                    value={languages}
                />
            </div>
        </div>
    );
};

export default WebOptions;
