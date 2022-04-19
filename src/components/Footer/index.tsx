import * as S from './styles'
import { Twitter, Instagram, Facebook } from '@styled-icons/boxicons-logos'
import { useAuth } from '../../context/AuthContext'
import Logo from 'components/Logo'
import Button from 'components/Button'
import { UserDialog } from '../../components/UserDialog'
import PlayStoreIcon from 'components/PlayStoreIcon'
import FlutterIcon from 'components/FlutterIcon'
import { CurrentModal } from 'types/types'
import { useState } from 'react'

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
              <S.FooterItem onClick={() => setCurrentModal('signup')}>
                Cadastra-se
              </S.FooterItem>
              <S.FooterItem onClick={() => setCurrentModal('signin')}>
                Entrar
              </S.FooterItem>
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
            <S.FooterItem>Eventos</S.FooterItem>
            <S.FooterItem>Bem-estar</S.FooterItem>
          </S.FooterItemsContainer>
        </S.FooterContent>

        <S.FooterContent>
          <S.FooterTitle>Social Medias</S.FooterTitle>
          <S.FooterMediasContainer>
            <Twitter size={30} color="#FFFFFF" />
            <Instagram size={30} color="#FFFFFF" />
            <Facebook size={30} color="#FFFFFF" />
          </S.FooterMediasContainer>
        </S.FooterContent>

        <S.FooterContent>
          <S.FooterTitle>Disponível em:</S.FooterTitle>
          <S.FooterMediasContainer>
            <Button icon={<PlayStoreIcon />} format="square" size="small">
              Android
            </Button>
            <Button icon={<FlutterIcon />} format="square" size="small">
              Flutter
            </Button>
          </S.FooterMediasContainer>
        </S.FooterContent>
      </S.FooterContainer>
    </S.Wrapper>
  )
}
