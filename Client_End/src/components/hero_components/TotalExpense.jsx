import React, { useContext } from 'react'
import { CurrencyFormat } from "../../utils/CurrencyFormat"
import { DataContext } from '../../context/EntriesContext'


function TotalExpense(props) {
    const {totalExpense} = useContext(DataContext)
    return (
        <div
            className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm"
        >
            <span>Expenses</span>
            <p>- BDT <span id="total-expanse">{CurrencyFormat(totalExpense)}</span></p>
        </div>
    )
}

export default TotalExpense