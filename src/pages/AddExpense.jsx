import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ExpenseForm from '../components/ExpenseForm'
import {API_URL} from '../constants/utils'

function AddExpense() {
  const navigate = useNavigate()
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/api/expenses`, expense)
      navigate(`/expense/${response.data.id}`)
    } catch (err) {
      console.error('Error adding expense:', err)
    }
  }

  return (
    <div>
      <h1>Add New Expense</h1>
      <ExpenseForm 
        expense={expense} 
        setExpense={setExpense} 
        onSubmit={handleSubmit} 
        buttonText="Add Expense"
      />
    </div>
  )
}

export default AddExpense