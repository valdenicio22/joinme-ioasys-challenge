import { useAuth } from 'context/AuthContext'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { withSSRGuest } from 'utils/withSSRGuest'

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

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
