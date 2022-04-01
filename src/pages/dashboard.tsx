import { useAuth } from 'context/AuthContext'
import Link from 'next/link'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <h1>Bem-vindo: {!!user && `${user.firstName} ${user.lastName}`}</h1>

      <Link href="/events">
        <a>Events</a>
      </Link>
      <button>Logout</button>
    </>
  )
}
