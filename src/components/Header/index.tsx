import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.LogoBtnContainer onClick={() => Router.push('/')}>
        <Logo color="black" />
      </S.LogoBtnContainer>
      <S.NavContainer>
        <S.NavButton>Entrar</S.NavButton>
        <S.NavButton>Cadastra-se</S.NavButton>
      </S.NavContainer>
    </S.Wrapper>
  )
}

export default Header
