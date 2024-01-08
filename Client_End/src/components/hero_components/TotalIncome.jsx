import React, { useContext } from 'react'
import { CurrencyFormat } from "../../utils/CurrencyFormat"
import { DataContext } from '../../context/EntriesContext'

function TotalIncome() {
    const {totalIncome} = useContext(DataContext)
    return (
        <div
            className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm"
        >
            <p>Income</p>
            <p>+ BDT <span id="total-income">{CurrencyFormat(totalIncome)}</span></p>
        </div>
    )
}

export default TotalIncome