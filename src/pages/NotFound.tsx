import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="mainError">
      <h2 className="titleError">404</h2>
      <p className="paragraphError">Page not found</p>
      <Link to="/" className="linkError">
        Return to the home page
      </Link>
    </main>
  )
}
