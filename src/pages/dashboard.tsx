import { useAuth } from 'context/AuthContext'
import React from 'react'

const Dashboard = () => {
  const { user } = useAuth()

  return <h1>Bem-vindo: {`${user?.firstName} ${user?.lastName}`}</h1>
}

export default Dashboard
