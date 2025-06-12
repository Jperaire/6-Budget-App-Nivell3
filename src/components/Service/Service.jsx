import WebOptions from "../WebOptions/WebOptions";
import styles from "./Service.module.css";

const Service = ({
    service,
    onChange,
    checked,
    pages,
    setPages,
    languages,
    setLanguages,
}) => {
    const handleCheckbox = (e) => {
        onChange(service.title, e.target.checked);
    };

    return (
        <label htmlFor={service.title} className={styles.container}>
            <div className={styles.info}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>

            <div className={`${styles.price} flex-center`}>
                {service.price} €
            </div>

            <div className={`${styles.inputDiv} flex-center`}>
                <input
                    type="checkbox"
                    id={service.title}
                    className={styles.input}
                    onChange={handleCheckbox}
                    checked={checked}
                />
                <p>Afegir</p>
            </div>
            <div className={styles.webOptions}>
                {service.title === "Web" && checked && (
                    <WebOptions
                        pages={pages}
                        setPages={setPages}
                        languages={languages}
                        setLanguages={setLanguages}
                    />
                )}
            </div>
        </label>
    );
};

export default Service;
