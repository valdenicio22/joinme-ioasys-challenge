import Button from 'components/Button'
import { TextField } from 'components/TextField'
import SirenIcon from 'components/SirenIcon'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'
import { User } from '../../types/types'

import { setCookie } from 'nookies'
import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../../service/api'

type SecurityContactData = Pick<User, 'emergencyName' | 'emergencyPhone'>

type EmergencyContactProps = {
  setModalStep: (arg: number) => void
}

export const EmergencyContact = ({ setModalStep }: EmergencyContactProps) => {
  const { register, handleSubmit } = useForm<SecurityContactData>()

  const { user, setUser } = useAuth()

  const onSubmit: SubmitHandler<SecurityContactData> = async (formData) => {
    if (formData) {
      const updatedUser = {
        ...user!,
        emergencyName: formData.emergencyName,
        emergencyPhone: formData.emergencyPhone
      }
      try {
        console.log({ updatedUser })
        const response = await api.patch<{ updatedUser: User }>('/users', {
          updatedUser
        })
        setUser(response.data.updatedUser)
        setCookie(undefined, 'joinMeUser', JSON.stringify(updatedUser), {
          maxAge: 60 * 60 * 24 * 30, //30 days
          path: '/'
        })
        setModalStep(2)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <S.LogoContainer>
        <SirenIcon />
      </S.LogoContainer>

      <S.TitleAndDescription>
        <S.H1>Você gostaria de adicionar um contato para emergências?</S.H1>
        <S.Description>
          Esse contato serve para enviarmos uma mensagem para alguém que você
          confia, caso você não se sinta segura ou confortável em alguma
          situação, através do botão de ajuda.
        </S.Description>
      </S.TitleAndDescription>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.InputsContainer>
          <TextField
            label="Qual é o nome do seu contato?"
            type="text"
            {...register('emergencyName')}
            placeholder="luma silva"
            fullWidth={true}
          />
          <TextField
            label="Qual é o telefone do seu contato?"
            type="text"
            placeholder="(99) 9 9999-9999"
            fullWidth={true}
            {...register('emergencyPhone')}
          />
        </S.InputsContainer>

        <S.ButtonsContainer>
          <Button type="submit" fullWidth={true}>
            ADICIONAR CONTATO
          </Button>
          <S.SkipStep onClick={() => setModalStep(2)}>PULAR</S.SkipStep>
        </S.ButtonsContainer>
      </S.FormContainer>
    </>
  )
}
