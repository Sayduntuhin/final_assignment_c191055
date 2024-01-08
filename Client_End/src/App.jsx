import './App.css'
import DataContextProvider from './context/EntriesContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <DataContextProvider>
      <HomePage />
    </DataContextProvider>
  )
}

export default App
