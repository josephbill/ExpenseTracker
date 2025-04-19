import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from '../components/ExpenseList'
import axios from 'axios'
import { API_URL } from '../constants/utils'
function Dashboard() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/expenses`)
        console.log(`${API_URL}/api/expenses`)
        console.log(response)
        setExpenses(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchExpenses()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/expenses/${id}`)
      setExpenses(expenses.filter(expense => expense.id !== id))
    } catch (err) {
      console.error('Error deleting expense:', err)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
      <Link to="/add" className="btn">Add New Expense</Link>
    </div>
  )
}

export default Dashboard