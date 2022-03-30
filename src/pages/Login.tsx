import { FormEvent, useState } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useAuth } from 'context/AuthContext'
import Head from 'next/head'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Login | joinMe</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <TextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button>Entrar</Button>
      </form>
    </>
  )
}
