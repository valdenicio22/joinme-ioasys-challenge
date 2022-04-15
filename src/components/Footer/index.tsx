import * as S from './styles'
import {
  Twitter,
  Instagram,
  Google,
  Youtube
} from '@styled-icons/boxicons-logos'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.FotterContent>
        <S.OutsideConnections>
          <S.SocialMediasContainer>
            <S.FollowUs>Siga-nos</S.FollowUs>
            <S.SocialMedias>
              <Twitter size={30} color="#d9d9d9" />
              <Instagram size={30} color="#d9d9d9" />
              <Google size={30} color="#d9d9d9" />
              <Youtube size={30} color="#d9d9d9" />
            </S.SocialMedias>
          </S.SocialMediasContainer>

          <S.MobileButtonsContainer>
            <S.ButtonsLabel>Disponível em:</S.ButtonsLabel>
            <S.SocialMedias>
              <S.MobileButton>Android</S.MobileButton>
              <S.MobileButton>Flutter</S.MobileButton>
            </S.SocialMedias>
          </S.MobileButtonsContainer>
        </S.OutsideConnections>

        <S.BottomInfo>
          <S.BottomLink>© 2022 joinMe</S.BottomLink>
          <S.BottomLink>Termos de serviço</S.BottomLink>
          <S.BottomLink>Ajuda</S.BottomLink>
        </S.BottomInfo>
      </S.FotterContent>
    </S.Wrapper>
  )
}
