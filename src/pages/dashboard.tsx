import { useAuth } from 'context/AuthContext'
import React, { useEffect } from 'react'
import { api } from 'service/api'

export default function Dashboard() {
  const { user } = useAuth()

  useEffect(() => {
    api
      .get('/users/logout')
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }, [])

  return <h1>Bem-vindo: {!!user && `${user.firstName} ${user.lastName}`}</h1>
}
