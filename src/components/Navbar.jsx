import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add Expense</Link>
    </nav>
  )
}

export default Navbar