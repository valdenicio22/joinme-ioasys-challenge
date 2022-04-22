import Button from 'components/Button'
import * as S from './styles'
import { Dispatch, SetStateAction } from 'react'
import { CurrentModal } from 'types/types'

type SuccessResetPasswordProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

export const SuccessResetPassword = ({
  setCurrentModal
}: SuccessResetPasswordProps) => {
  return (
    <S.Wrapper>
      <S.FeedBackContainer>
        <S.Title>Nova senha enviada com sucesso!</S.Title>
        <S.Info>Verifique seu e-mail e faça login com a nova senha!</S.Info>
      </S.FeedBackContainer>
      <S.ImageContainer>
        <img
          src="/img/sucessResetPassword.svg"
          alt="resete de senha realizado com Successo"
        />
      </S.ImageContainer>
      <S.ButtonContainer>
        <Button
          bgColor="primary"
          fullWidth={true}
          onClick={() => setCurrentModal('signin')}
        >
          ACESSAR SUA CONTA
        </Button>
      </S.ButtonContainer>
      <S.FooterInfo>
        Não recebeu a senha?{' '}
        <S.Retry onClick={() => setCurrentModal('forgotPassword')}>
          Reenvie aqui!
        </S.Retry>
      </S.FooterInfo>
    </S.Wrapper>
  )
}
