import { Link } from 'react-router-dom'
import logo from '../assets/Logo-Wealth-Health.jpg'
import DivLogo from './DivLogo'

export default function Header() {
  return (
    <>
      <DivLogo />
      <Link to="/employee-list" className="linkCurrentEmployees">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>
    </>
  )
}
