import Button from 'components/Button'
import { TextField } from 'components/TextField'
import Fakelogo from 'components/Fakelogo'

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
        <Fakelogo />
      </S.LogoContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.H2>Adicione um contato de segurança</S.H2>

        <S.InputsContainer>
          <TextField
            label="Qual o nome da pessoa?"
            type="text"
            {...register('emergencyName')}
            placeholder="luma silva"
            fullWidth={true}
          />
          <TextField
            label="E o telefone?"
            type="text"
            placeholder="(99) 9 9999-9999"
            fullWidth={true}
            {...register('emergencyPhone')}
          />
        </S.InputsContainer>

        <S.ButtonsContainer>
          <S.SkipStep onClick={() => setModalStep(2)}>pular</S.SkipStep>
          <Button type="submit">proximo</Button>
        </S.ButtonsContainer>
      </S.FormContainer>
    </>
  )
}

export default EmergencyContact
