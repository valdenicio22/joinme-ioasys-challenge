import Button from 'components/Button'
import Logo from 'components/Logo'
import { useAuth, signOut } from 'context/AuthContext'
import Link from 'next/link'
import Router from 'next/router'
import * as S from './styles'

const Header = () => {
  const { user, setUser } = useAuth()

  const handleLogout = () => {
    setUser(undefined!)
    signOut()
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Logo />
        <S.NavContainer>
          <Link href="/">Home</Link>
          <Link href="/">Posts</Link>
        </S.NavContainer>
        {user ? (
          <>
            <p>
              Bem vindo: <span>{user.name}</span>
            </p>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => Router.push('/login')}>Login</Button>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Header
