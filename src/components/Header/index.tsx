import Button from 'components/Button'
import Logo from 'components/Logo'
import { useAuth } from 'context/AuthContext'
import Link from 'next/link'
import Router from 'next/router'
import * as S from './styles'

const Header = () => {
  const { user } = useAuth()

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Logo />
        <S.NavContainer>
          <Link href="/">Home</Link>
          <Link href="/">Posts</Link>
        </S.NavContainer>
        {user ? (
          <div> {` Bem-vindo: ${user.name}`}</div>
        ) : (
          <Button onClick={() => Router.push('/login')}>Login</Button>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Header
