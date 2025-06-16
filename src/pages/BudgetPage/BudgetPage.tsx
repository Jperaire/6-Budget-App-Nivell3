import Header from "../../components/Header/Header.js";
import BudgetForm from "../../components/BudgetForm/BudgetForm.js";
import GetBudget from "../../components/GetBudget/GetBudget.js";

const BudgetPage = () => {
    return (
        <>
            <Header />
            <BudgetForm />
            <GetBudget />
        </>
    );
};

export default BudgetPage;
