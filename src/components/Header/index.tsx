import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { Dialog } from 'components/Dialog'
import { Signin } from 'components/Signin'

const Header = () => {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)

  return (
    <S.Wrapper>
      {isSigninModalOpen && (
        <Dialog
          isModalOpen={isSigninModalOpen}
          onCloseModal={() => setIsSigninModalOpen(false)}
        >
          <Signin isModalOpen={setIsSigninModalOpen} />
        </Dialog>
      )}
      <S.LogoBtnContainer onClick={() => Router.push('/')}>
        <Logo color="black" />
      </S.LogoBtnContainer>
      <S.NavContainer>
        <S.NavButton onClick={() => setIsSigninModalOpen(true)}>
          Entrar
        </S.NavButton>
        <S.NavButton>Cadastra-se</S.NavButton>
      </S.NavContainer>
    </S.Wrapper>
  )
}

export default Header
