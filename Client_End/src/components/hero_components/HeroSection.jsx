import React from 'react'
import AvailableBudget from './AvailableBudget'
import TotalIncome from './TotalIncome'
import TotalExpanse from './TotalExpense'

function HeroSection() {
    return (
        <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
            <AvailableBudget />
            <TotalIncome />
            <TotalExpanse/>
        </div>
    )
}

export default HeroSection