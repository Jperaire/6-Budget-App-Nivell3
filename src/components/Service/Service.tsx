import WebOptions from "../WebOptions/WebOptions.tsx";
import styles from "./Service.module.css";

interface ServiceProps {
    service: {
        title: string;
        description: string;
        price: number;
        hasOptions: boolean;
    };
    onChange: (serviceTitle: string, checked: boolean) => void;
    checked: boolean;
    pages: number;
    setPages: React.Dispatch<React.SetStateAction<number>>;
    languages: number;
    setLanguages: React.Dispatch<React.SetStateAction<number>>;
}

const Service = ({
    service,
    onChange,
    checked,
    pages,
    setPages,
    languages,
    setLanguages,
}: ServiceProps) => {
    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(service.title, e.target.checked);
    };

    return (
        <label
            htmlFor={service.title}
            className={`${styles.container} ${checked ? styles.selected : ""}`}
        >
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

            {service.hasOptions && checked && (
                <div className={styles.webOptions}>
                    <WebOptions
                        pages={pages}
                        setPages={setPages}
                        languages={languages}
                        setLanguages={setLanguages}
                    />
                </div>
            )}
        </label>
    );
};

export default Service;
