import { useSearchParams } from "react-router-dom";
import BudgetCard from "../../components/BudgetCard/BudgetCard";

const BudgetView: React.FC = () => {
    const [searchParams] = useSearchParams();

    const budget = {
        id: new Date(),
        name: searchParams.get("name") || "Desconegut",
        email: searchParams.get("email") || "-",
        phone: searchParams.get("phone") || "-",
        total: parseFloat(searchParams.get("total") || "0"),
        seo: searchParams.get("seo") === "true",
        ads: searchParams.get("ads") === "true",
        web: searchParams.get("web") === "true",
        pages: parseInt(searchParams.get("pages") || "0"),
        languages: parseInt(searchParams.get("languages") || "0"),
    };

    return (
        <>
            <BudgetCard budget={budget} isShareable={false} />
        </>
    );
};

export default BudgetView;
