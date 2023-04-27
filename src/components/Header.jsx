import { Link } from 'react-router-dom'
import logo from '../assets/Logo-Wealth-Health.jpg'

export default function Header() {
  return (
    <>
      <div className="logoTitle">
        <img src={logo} alt="Logo-Wealth-Health" />
        <h1 className="h1Header">HRnet</h1>
      </div>

      <Link to="/employee-list" className="linkCurrentEmployees">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>
    </>
  )
}
