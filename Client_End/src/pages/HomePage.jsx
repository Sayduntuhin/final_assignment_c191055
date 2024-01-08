import React from 'react'
import AppBar from '../components/header_components/AppBar'
import HeroSection from '../components/hero_components/HeroSection'
import Entry from '../components/add_entry_components/Entry'
import BothIncomeExpanseList from '../components/list_income_expanse/BothIncomeExpanseList'


function HomePage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-400 to-violet-600">
        <AppBar />
        <HeroSection />
        <Entry />
      </div>
      <BothIncomeExpanseList />
    </div>

  )
}

export default HomePage