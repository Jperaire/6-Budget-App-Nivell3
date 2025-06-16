import { useNavigate } from "react-router-dom";
import styles from "../../styles/commonButton.module.css";

const ResetButton: React.FC = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <>
            <button
                type="button"
                onClick={goHome}
                className={styles.commonButton}
            >
                ENRERE
            </button>
        </>
    );
};

export default ResetButton;
