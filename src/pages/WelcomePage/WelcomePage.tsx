import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/budget");

    return (
        <div className={`${styles.container} flex-center`}>
            <h1>Benvingut a Presupostador Pro</h1>
            <p>Calcula el cost dels teus serveis digitals en segons</p>
            <button onClick={handleClick}>Comença a calcular</button>
        </div>
    );
};

export default WelcomePage;
