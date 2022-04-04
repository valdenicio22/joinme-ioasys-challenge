import Logo from 'components/Logo'
import SignUpButton from 'components/SignUpButton'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.ContentWrapper>
      <Logo />
      <S.NavContainer>
        <a href="" className="active">
          Home
        </a>
        <a href="">Posts</a>
      </S.NavContainer>
      <SignUpButton />
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Header
