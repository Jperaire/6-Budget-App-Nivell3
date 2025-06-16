import { useNavigate } from "react-router-dom";
import styles from "./ResetButton.module.css";

const ResetButton = ({ setLanguages, setPages, setTotal, setSelections }) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <>
            <button
                type="button"
                onClick={goHome}
                className={styles.resetButton}
            >
                ENRERE
            </button>
        </>
    );
};

export default ResetButton;
