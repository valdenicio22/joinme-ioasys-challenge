import { useAuth } from 'context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <h1>Bem-vindo: {!!user && `${user.firstName} ${user.lastName}`}</h1>
      <button>Logout</button>
    </>
  )
}
