import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { Dialog } from 'components/Dialog'
import { Signin } from 'components/Signin'
import { Signup } from 'components/Signup'
import { ForgotPassword } from 'components/ForgotPassword'
import { useAuth } from 'context/AuthContext'
import UserDropdown from 'components/UserDropdown'

const Header = () => {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false)
  const { user } = useAuth()

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
        <Logo color="blue" />
      </S.LogoBtnContainer>
      {user ? (
        <UserDropdown username={user.name} />
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
