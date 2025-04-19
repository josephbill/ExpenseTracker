import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../constants/utils'


function ExpenseDetail() {
  const { id } = useParams()
  const [expense, setExpense] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get(`${`${API_URL}`}/api/expenses/${id}`)
        setExpense(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchExpense()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!expense) return <div>Expense not found</div>

  return (
    <div>
      <h1>{expense.title}</h1>
      <div className="expense-details">
        <p><strong>Amount:</strong> ${expense.amount}</p>
        <p><strong>Category:</strong> {expense.category}</p>
        <p><strong>Date:</strong> {new Date(expense.date).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {expense.description || 'N/A'}</p>
      </div>
      <Link to={`/edit/${id}`} className="btn">Edit</Link>
      <Link to="/" className="btn">Back to Dashboard</Link>
    </div>
  )
}

export default ExpenseDetail