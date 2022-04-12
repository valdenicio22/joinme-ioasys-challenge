import Image from 'next/image'
import * as S from './styles'

export const EventCard = () => {
  return (
    <S.Wrapper>
      <S.ImgContainer>
        <Image width={160} height={100} src="/test.webp" alt="Teste" />
      </S.ImgContainer>
      <S.EventDetails>
        <S.Schedule>13 de Abr. De 2022 20:00 BRT</S.Schedule>

        <S.EventTitle>Lets Make Friends!</S.EventTitle>
        <S.Participants>45 participantes</S.Participants>
        <S.Flags>Icon to favorite</S.Flags>
      </S.EventDetails>
    </S.Wrapper>
  )
}
