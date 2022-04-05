import Button from 'components/Button'
import Logo from 'components/Logo'
import { useRouter } from 'next/router'
import * as S from './styles'

const Header = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Logo />
        <S.NavContainer>
          <a href="" className="active">
            Home
          </a>
          <a href="">Posts</a>
        </S.NavContainer>
        <Button onClick={() => router.push('/login')}>Login</Button>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Header
