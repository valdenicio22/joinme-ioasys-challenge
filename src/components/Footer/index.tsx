import * as S from './styles'
import {
  Twitter,
  Instagram,
  FacebookCircle
} from '@styled-icons/boxicons-logos'
import { useAuth } from '../../context/AuthContext'
import Logo from 'components/Logo'
import Button from 'components/Button'
import { UserDialog } from '../../components/UserDialog'
import PlayStoreIcon from 'components/PlayStoreIcon'
import FlutterIcon from 'components/FlutterIcon'
import { CurrentModal } from 'types/types'
import { useState } from 'react'
import Router from 'next/router'

export const Footer = () => {
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
      {currentModal === 'successSignup' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}
      {currentModal === 'successResetPassword' && (
        <UserDialog
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
        />
      )}

      <S.FooterContainer>
        <S.FooterContent>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <S.CopyRight>
            © CopyRight 2022 <br /> All Rights Reserved.
          </S.CopyRight>
        </S.FooterContent>

        {!user && (
          <S.FooterContent>
            <S.FooterTitle>Sua conta</S.FooterTitle>
            <S.FooterItemsContainer>
              <S.FooterItemButton onClick={() => setCurrentModal('signup')}>
                Cadastra-se
              </S.FooterItemButton>
              <S.FooterItemButton onClick={() => setCurrentModal('signin')}>
                Entrar
              </S.FooterItemButton>
            </S.FooterItemsContainer>
          </S.FooterContent>
        )}

        <S.FooterContent>
          <S.FooterTitle>Sobre</S.FooterTitle>
          <S.FooterItemsContainer>
            <S.FooterItem>Sobre</S.FooterItem>
            <S.FooterItem>Ajuda</S.FooterItem>
          </S.FooterItemsContainer>
        </S.FooterContent>

        <S.FooterContent>
          <S.FooterTitle>Descubra</S.FooterTitle>
          <S.FooterItemsContainer>
            <S.FooterItemButton onClick={() => Router.push('/home')}>
              Eventos
            </S.FooterItemButton>
            <S.FooterItemButton onClick={() => Router.push('/blog')}>
              Blog
            </S.FooterItemButton>
          </S.FooterItemsContainer>
        </S.FooterContent>

        <S.FooterContent>
          <S.FooterTitle>Social Medias</S.FooterTitle>
          <S.FooterMediasContainer>
            <FacebookCircle size={30} color="#FFFFFF" />
            <Instagram size={30} color="#FFFFFF" />
            <Twitter size={30} color="#FFFFFF" />
          </S.FooterMediasContainer>
        </S.FooterContent>

        <S.FooterContent>
          <S.FooterTitle>Disponível em:</S.FooterTitle>
          <S.FooterMediasContainer>
            <Button
              borderColor="white"
              leftIcon={<PlayStoreIcon />}
              format="square"
              size="small"
            >
              Android
            </Button>
            <Button
              borderColor="white"
              leftIcon={<FlutterIcon />}
              format="square"
              size="small"
            >
              Flutter
            </Button>
          </S.FooterMediasContainer>
        </S.FooterContent>
      </S.FooterContainer>
    </S.Wrapper>
  )
}
