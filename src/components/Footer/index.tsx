import * as S from './styles'
import { Twitter, Instagram, Facebook } from '@styled-icons/boxicons-logos'
import Logo from 'components/Logo'
import Button from 'components/Button'
import PlayStoreIcon from 'components/PlayStoreIcon'
import FlutterIcon from 'components/FlutterIcon'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterContainer>
        <S.FooterContent>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <S.CopyRight>
            © CopyRight 2022 <br /> All Rights Reserved.
          </S.CopyRight>
        </S.FooterContent>

        <S.FooterContent>
          <S.FooterTitle>Sua conta</S.FooterTitle>
          <S.FooterItemsContainer>
            <S.FooterItem>Cadastra-se</S.FooterItem>
            <S.FooterItem>Entrar</S.FooterItem>
          </S.FooterItemsContainer>
        </S.FooterContent>

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
