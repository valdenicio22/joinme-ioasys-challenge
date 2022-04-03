import SignUpButton from 'components/SignUpButton'
import Image from 'next/image'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.ContentWrapper>
      <Image src="/img/logo.svg" alt="ig.news" width={100} height={70} />
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
