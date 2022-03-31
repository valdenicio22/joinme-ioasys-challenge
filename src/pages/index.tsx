import Link from 'next/link'
import * as S from '../styles/Home.styles'

export default function Home() {
  return (
    <S.Wrapper>
      <Link href="/login">
        <a>Login Page</a>
      </Link>
      <Link href="/signup">
        <a>SignUp Page</a>
      </Link>
    </S.Wrapper>
  )
}
