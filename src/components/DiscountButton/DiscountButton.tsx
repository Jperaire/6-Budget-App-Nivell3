import styles from "./DiscountButton.module.css";
import { useContext } from "react";
import { DiscountContext } from "../../context/DiscountContext/DiscountContext";

const DiscountToggleButton = () => {
    const { isDiscountActive, toggleDiscount } = useContext(DiscountContext);

    return (
        <div className={styles.container}>
            <p>Pagament mensual</p>
            <div className="form-check form-switch">
                <input
                    className={`form-check-input ${styles.switch}`}
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={isDiscountActive}
                    onChange={toggleDiscount}
                />
            </div>
            <p>Pagament anual</p>
        </div>
    );
};

export default DiscountToggleButton;
