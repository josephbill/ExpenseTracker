import { Link } from 'react-router-dom'

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses found. Add one to get started!</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              <div>
                <h3>{expense.title}</h3>
                <p>Amount: ${expense.amount}</p>
                <p>Category: {expense.category}</p>
                <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
              </div>
              <div>
                <Link to={`/expense/${expense.id}`}>View</Link>
                <Link to={`/edit/${expense.id}`}>Edit</Link>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList