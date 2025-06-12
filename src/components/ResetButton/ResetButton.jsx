import { useNavigate } from "react-router-dom";
import styles from "./ResetButton.module.css";

const ResetButton = ({ setLanguages, setPages, setTotal, setSelections }) => {
    const navigate = useNavigate();

    // TODO: NO HACE FALTA CREO, AL CAMBIAR DE PÁGINA SE PIERDE EL ESTADO
    const resetForm = () => {
        setSelections({
            Seo: false,
            Ads: false,
            Web: false,
        });
        setPages(1);
        setLanguages(1);
        setTotal(0);
    };

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
                REINICIA
            </button>
        </>
    );
};

export default ResetButton;
