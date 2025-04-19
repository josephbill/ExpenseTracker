import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ExpenseForm from '../components/ExpenseForm'
import { API_URL } from '../constants/utility'
function EditExpense() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [expense, setExpense] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/expenses/${id}`)
        setExpense(response.data)
      } catch (err) {
        console.error('Error fetching expense:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchExpense()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${API_URL}/api/expenses/${id}`, expense)
      navigate(`/expense/${id}`)
    } catch (err) {
      console.error('Error updating expense:', err)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!expense) return <div>Expense not found</div>

  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm 
        expense={expense} 
        setExpense={setExpense} 
        onSubmit={handleSubmit} 
        buttonText="Update Expense"
      />
    </div>
  )
}

export default EditExpense