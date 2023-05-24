import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="mainError">
      <h1>404</h1>
      <p>La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLink">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}
