import { useNavigate } from "react-router-dom";
import homeImg from "../../assets/images/home.png";
import styles from "./ResetButton.module.css";

const ResetButton: React.FC = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <>
            <button type="button" onClick={goHome} className={styles.button}>
                <img
                    src={homeImg}
                    alt="Botón para volver a home"
                    className={styles.homeImg}
                />
            </button>
        </>
    );
};

export default ResetButton;
