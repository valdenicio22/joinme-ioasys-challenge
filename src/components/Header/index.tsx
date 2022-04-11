import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { Dialog } from 'components/Dialog'
import { Signin } from 'components/Signin'
import Signup from 'components/Signup'
import { signOut, useAuth } from 'context/AuthContext'
import PersonIcon from 'components/PersonIcon'

const Header = () => {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const { user, setUser } = useAuth()

  const handleSignOut = () => {
    signOut()
    setUser(undefined!)
  }

  return (
    <S.Wrapper>
      {isSigninModalOpen && (
        <Dialog
          isModalOpen={isSigninModalOpen}
          onCloseModal={() => setIsSigninModalOpen(false)}
        >
          <Signin
            setIsSigninModalOpen={setIsSigninModalOpen}
            setIsSignupModalOpen={setIsSignupModalOpen}
            isSignupModalOpen={isSignupModalOpen}
          />
        </Dialog>
      )}
      {isSignupModalOpen && (
        <Dialog
          isModalOpen={isSignupModalOpen}
          onCloseModal={() => setIsSignupModalOpen(false)}
        >
          <Signup setIsSignupModalOpen={setIsSignupModalOpen} />
        </Dialog>
      )}
      <S.LogoBtnContainer onClick={() => Router.push('/')}>
        <Logo color="black" />
      </S.LogoBtnContainer>
      {user ? (
        <S.LoggedInMenu>
          <S.NavButton onClick={handleSignOut}>Sair</S.NavButton>
          <PersonIcon />
        </S.LoggedInMenu>
      ) : (
        <S.NavContainer>
          <S.NavButton onClick={() => setIsSigninModalOpen(true)}>
            Entrar
          </S.NavButton>
          <S.NavButton onClick={() => setIsSignupModalOpen(true)}>
            Cadastra-se
          </S.NavButton>
        </S.NavContainer>
      )}
    </S.Wrapper>
  )
}

export default Header
