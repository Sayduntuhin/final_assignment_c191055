import React from 'react'
import BudgetApp from './BudgetApp'
import SignIn from './SignIn'

function AppBar() {
  return (
    <div className="bg-violet-700/30 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white">
            <BudgetApp/>
            <SignIn/>
        </div>
    </div>
    
  )
}

export default AppBar