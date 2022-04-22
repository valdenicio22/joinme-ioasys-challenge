import Arrow from 'components/Arrow'
import Button from 'components/Button'
import { TextField } from 'components/TextField'

import * as S from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from 'service/api'
import { toast } from 'react-toastify'
import IconLogo from 'components/IconLogo'
import { Dispatch, SetStateAction } from 'react'
import { CurrentModal } from 'types/types'

type ForgotPasswordData = {
  email: string
}

type ForgotPasswordProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

export const ForgotPassword = ({ setCurrentModal }: ForgotPasswordProps) => {
  const { register, handleSubmit } = useForm<ForgotPasswordData>()

  const onSubmit: SubmitHandler<ForgotPasswordData> = async (formData) => {
    try {
      await api.patch<ForgotPasswordData>('/users/resetpassword', {
        ...formData
      })
      toast.success('Uma nova senha foi enviada para seu e-mail')
      setCurrentModal('successResetPassword')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 404) {
        toast.error('Usuário não encontrado')
      }
    }
  }

  return (
    <S.Wrapper>
      <S.ArrowContainer onClick={() => setCurrentModal('signin')}>
        <Arrow />
      </S.ArrowContainer>

      <S.IconLogoContainer>
        <IconLogo />
      </S.IconLogoContainer>

      <S.InfoContainer>
        <S.H1>Esqueceu a senha?</S.H1>
        <S.PInfo>
          Não se preocupe, acontece! Digite seu e-mail abaixo que vamos enviar
          uma nova senha.
        </S.PInfo>
      </S.InfoContainer>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Seu e-mail:*"
          type="email"
          fullWidth={true}
          {...register('email', {
            required: true,
            pattern: /\S+@\S+\.\S+/
          })}
          placeholder="lumasilva@email.com"
        />

        <S.BtnAndLastInfoContainer>
          <Button fullWidth={true} bgColor="primary">
            ENVIAR
          </Button>
          <S.PInfoAccount>
            Lembrou qual era?&nbsp;
            <S.YourAccount onClick={() => setCurrentModal('signin')}>
              Acesse sua conta aqui!
            </S.YourAccount>
          </S.PInfoAccount>
        </S.BtnAndLastInfoContainer>
      </S.Form>
    </S.Wrapper>
  )
}
