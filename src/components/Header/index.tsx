import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { Dialog } from 'components/Dialog'
import { Signin } from 'components/Signin'
import { Signup } from 'components/Signup'
import { ForgotPassword } from 'components/ForgotPassword'
import { signOut, useAuth } from 'context/AuthContext'
import PersonIcon from 'components/PersonIcon'

const Header = () => {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false)
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
            setIsForgotPasswordModalOpen={setIsForgotPasswordModalOpen}
          />
        </Dialog>
      )}
      {isForgotPasswordModalOpen && (
        <Dialog
          isModalOpen={isForgotPasswordModalOpen}
          onCloseModal={() => setIsForgotPasswordModalOpen(false)}
        >
          <ForgotPassword
            setIsForgotPasswordModalOpen={setIsForgotPasswordModalOpen}
            setIsSigninModalOpen={setIsSigninModalOpen}
          />
        </Dialog>
      )}
      {isSignupModalOpen && (
        <Dialog
          isModalOpen={isSignupModalOpen}
          onCloseModal={() => setIsSignupModalOpen(false)}
        >
          <Signup
            setIsSignupModalOpen={setIsSignupModalOpen}
            setIsSigninModalOpen={setIsSigninModalOpen}
          />
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
