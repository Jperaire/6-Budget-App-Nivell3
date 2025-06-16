import { useState, useEffect } from "react";

import styles from "./BudgetPage.module.css";

import { services } from "../../data/services.js";
import { calculateTotal } from "../../utils/calculateTotal.js";

import Header from "../../components/Header/Header.jsx";
import BudgetForm from "../../components/BudgetForm/BudgetForm.jsx";

const BudgetPage = () => {
    return (
        <>
            <Header />
            <BudgetForm />
        </>
    );
};

export default BudgetPage;
