import { useAuth } from 'context/AuthContext'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { withSSRAuth } from 'utils/withSSRAuth'
import { signOut } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <h1>Bem-vindo: {!!user && `${user.name}`}</h1>

      <Link href="/events">
        <a>Events</a>
      </Link>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
