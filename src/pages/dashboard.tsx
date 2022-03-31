import { useAuth } from 'context/AuthContext'
import React from 'react'
import Link from 'next/Link'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <h1>Bem-vindo: {!!user && `${user.firstName} ${user.lastName}`}</h1>
      <Link href="/eventos">
        <a>Criar Eventos</a>
      </Link>
      <button>Logout</button>
    </>
  )
}
