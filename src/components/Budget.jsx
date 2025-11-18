import { createContext, useState } from "react";
const Budget = createContext()
export function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    return (
        <Budget.Provider value={{ budgetMode, setBudgetMode }}>
            {children}
        </Budget.Provider>
    );
}
export default Budget