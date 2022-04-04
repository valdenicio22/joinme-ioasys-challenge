import Head from 'next/head'
import Link from 'next/link'
import * as S from '../styles/Home.styles'

export default function Home() {
  return (
    <S.Wrapper>
      <Head>
        <title>Home | joinMe</title>
      </Head>

      <main>
        <section>
          <span>👏 Hey, Bem vindo!</span>
          <h1>
            News about the <span>React</span>world
          </h1>
          <p>
            Get acess to all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
      </main>

      <Link href="/login">
        <a>Login Page</a>
      </Link>
      <Link href="/signup">
        <a>SignUp Page</a>
      </Link>
    </S.Wrapper>
  )
}
