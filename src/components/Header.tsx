import { Link } from 'react-router-dom'
import DivLogo from './DivLogo'

export default function Header({ link, nameLink, title }) {
  return (
    <>
      <DivLogo />
      <Link to={link} className="linkCurrentEmployees">
        {nameLink}
      </Link>
      <h2>{title}</h2>
    </>
  )
}
