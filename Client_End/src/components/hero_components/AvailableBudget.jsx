import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/EntriesContext'
import { CurrencyFormat } from "../../utils/CurrencyFormat"

function AvailableBudget() {
    const {totalIncome, totalExpense} = useContext(DataContext);
    let budget = totalIncome - totalExpense;
    
    
    return (
        <div>
            <h2>Available Budget</h2>
            <p className="mt-1 text-4xl font-medium">+ BDT <span id="aval_budget">{CurrencyFormat(budget)}</span></p>
        </div>
    )
}

export default AvailableBudget