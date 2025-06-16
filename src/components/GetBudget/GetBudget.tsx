import styles from "./GetBudget.module.css";
import button from "../../styles/commonButton.module.css";

const GetBudget = () => {
    return (
        <div className={styles.container}>
            <h2>Demanar pressupost</h2>

            <form className={styles.content}>
                <input type="text" id="clientName" placeholder="Nom" />
                <input type="text" id="clientPhone" placeholder="Teléfon" />
                <input type="email" id="clientEmail" placeholder="Email" />

                <button type="button" className={button.commonButton}>
                    Sol·licitar pressupost →
                </button>
            </form>
        </div>
    );
};

export default GetBudget;
