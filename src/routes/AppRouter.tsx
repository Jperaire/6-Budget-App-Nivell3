import { Route, Routes } from "react-router-dom";
import BudgetPage from "../pages/BudgetPage/BudgetPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import NotFound from "../pages/NotFound/NotFound";
import BudgetView from "../pages/BudgetView/BudgetView";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="budget" element={<BudgetPage />} />
            <Route path="/budget/view" element={<BudgetView />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
