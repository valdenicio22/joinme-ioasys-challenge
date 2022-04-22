import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { useAuth } from 'context/AuthContext'
import UserDropdown from 'components/UserDropdown'
import { UserDialog } from 'components/UserDialog'
import { CurrentModal } from 'types/types'
import Button from 'components/Button'

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
      <S.HeaderContainer>
        <S.LogoBtnContainer
          onClick={() => (user ? Router.push('/home') : Router.push('/'))}
        >
          <Logo />
        </S.LogoBtnContainer>
        <S.NavContainer>
          <S.NavButton onClick={() => Router.push('/home')}>Home</S.NavButton>
          {!user && <S.NavButton>Sobre</S.NavButton>}

          <S.NavButton onClick={() => Router.push('/blog')}>Blog</S.NavButton>
          {user ? (
            <UserDropdown username={user.name} />
          ) : (
            <>
              <S.NavButton onClick={() => setCurrentModal('signin')}>
                Entrar
              </S.NavButton>
              <Button
                borderColor="white"
                onClick={() => setCurrentModal('signup')}
              >
                Cadastra-se
              </Button>
            </>
          )}
        </S.NavContainer>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export default Header
