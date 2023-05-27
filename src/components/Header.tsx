// @ts-nocheck

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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

Header.propTypes = {
  link: PropTypes.string,
  nameLink: PropTypes.string,
  title: PropTypes.string,
}
