import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { useAuth } from 'context/AuthContext'
import UserDropdown from 'components/UserDropdown'
import { UserDialog } from 'components/UserDialog'
import { CurrentModal } from 'types/types'

const Header = () => {
  const { user } = useAuth()
  const [currentModal, setCurrentModal] = useState<CurrentModal>('idle')

  return (
    <S.Wrapper>
      {currentModal === 'signin' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}
      {currentModal === 'signup' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}
      {currentModal === 'forgotPassword' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}

      <S.LogoBtnContainer
        onClick={() => (user ? Router.push('/home') : Router.push('/'))}
      >
        <Logo />
      </S.LogoBtnContainer>
      {user ? (
        <UserDropdown username={user.name} />
      ) : (
        <S.NavContainer>
          <S.NavButton onClick={() => setCurrentModal('signin')}>
            Entrar
          </S.NavButton>
          <S.NavButton onClick={() => setCurrentModal('signup')}>
            Cadastra-se
          </S.NavButton>
        </S.NavContainer>
      )}
    </S.Wrapper>
  )
}

export default Header
