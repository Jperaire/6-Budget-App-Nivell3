import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/budget");

    return (
        <div className={`${styles.container} flex-center`}>
            <h1>Bienvenido a Presupuestador Pro</h1>
            <p>Calcula el coste de tus servicios digitales en segundos</p>
            <button onClick={handleClick}>Empezar a calcular</button>
        </div>
    );
};

export default WelcomePage;
