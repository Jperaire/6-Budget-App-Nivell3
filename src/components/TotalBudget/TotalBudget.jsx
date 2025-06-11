import styles from "./TotalBudget.module.css";
import Service from "../Service/Service.jsx";
import { services } from "../../data/services.js";
import Header from "../Header/Header.jsx";

const TotalBudget = () => {
    return (
        <>
            <Header />
            <form className={`${styles.container} flex-center`}>
                {services.map((service) => {
                    return <Service service={service} key={service.title} />;
                })}
            </form>
            <p className={styles.p}>
                Preu pressuposat: <span>20€</span>{" "}
            </p>
        </>
    );
};

export default TotalBudget;
