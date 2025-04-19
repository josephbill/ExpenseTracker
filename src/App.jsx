import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import AddExpense from './pages/AddExpense'
import ExpenseDetail from './pages/ExpenseDetail'
import EditExpense from './pages/EditExpense'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/expense/:id" element={<ExpenseDetail />} />
          <Route path="/edit/:id" element={<EditExpense />} />
        </Routes>
      </div>
    </div>
  )
}

export default App