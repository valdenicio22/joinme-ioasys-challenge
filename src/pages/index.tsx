import Link from 'next/Link'

export default function Home() {
  return (
    <>
      <Link href="/login">
        <a>Login Page</a>
      </Link>
      <Link href="/signup">
        <a>SignUp Page</a>
      </Link>
    </>
  )
}
