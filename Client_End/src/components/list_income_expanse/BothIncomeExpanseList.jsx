import React, { useContext } from 'react'
import ListTitle from './ListTitle'
import UnorederList from './UnorederList'

function BothIncomeExpanseList() {
    return (
        <div className="mx-auto my-8 grid max-w-5xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
            <div>
                <ListTitle color="text-green-600" innerText='Income'/>
                <UnorederList
                    id="income-list"
                    type="income"
                    color="text-green-600"
                    />
            </div>

            <div>
                <ListTitle color="text-red-600" innerText='Expense'/>
                <UnorederList
                    id="expense-list"
                    type='expense'
                    color="text-red-600"
                    />
            </div>
        </div>
    )
}

export default BothIncomeExpanseList