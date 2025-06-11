import styles from "./Service.module.css";
const Service = ({ service }) => {
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
                />
                <p>Afegir</p>
            </div>
        </label>
    );
};

export default Service;
