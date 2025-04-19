function ExpenseForm({ expense, setExpense, onSubmit, buttonText }) {
    const handleChange = (e) => {
      const { name, value } = e.target
      setExpense(prev => ({ ...prev, [name]: value }))
    }
  
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={expense.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Amount:</label>
          <input 
            type="number" 
            name="amount" 
            value={expense.amount} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Category:</label>
          <select 
            name="category" 
            value={expense.category} 
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            name="date" 
            value={expense.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            name="description" 
            value={expense.description} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">{buttonText}</button>
      </form>
    )
  }
  
  export default ExpenseForm