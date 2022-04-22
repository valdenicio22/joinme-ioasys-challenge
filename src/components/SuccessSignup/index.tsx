import Button from 'components/Button'
import * as S from './styles'
import { Dispatch, SetStateAction } from 'react'
import { CurrentModal } from 'types/types'

type SuccessSignupProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

export const SuccessSignup = ({ setCurrentModal }: SuccessSignupProps) => {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <img
          src="/img/sucessSignup.svg"
          alt="cadastro realizado com Successo"
        />
      </S.ImageContainer>
      <S.FeedBackContainer>
        <S.Title>Que bom ter você por aqui!</S.Title>
        <S.Info>Sua conta foi criada com Successo!</S.Info>
      </S.FeedBackContainer>
      <S.ButtonContainer>
        <Button
          bgColor="primary"
          fullWidth={true}
          onClick={() => setCurrentModal('signin')}
        >
          Entrar
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}
