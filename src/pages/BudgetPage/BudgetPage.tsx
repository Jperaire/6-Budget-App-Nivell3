import Header from "../../components/Header/Header.js";
import BudgetForm from "../../components/BudgetForm/BudgetForm.js";
import styles from "./BudgetPage.module.css";
import { DiscountProvider } from "../../context/DiscountContext/DiscountProvider.js";
import DiscountButton from "../../components/DiscountButton/DiscountButton.tsx";
import ResetButton from "../../components/ResetButton/ResetButton.tsx";

const BudgetPage = () => {
    return (
        <DiscountProvider>
            <Header />
            <ResetButton />
            <DiscountButton />
            <BudgetForm />
            <div className={styles.footer}>PRESSUPOSTADOR PRO ©</div>
        </DiscountProvider>
    );
};

export default BudgetPage;
