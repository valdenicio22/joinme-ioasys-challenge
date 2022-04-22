import Button from 'components/Button'
import { TextField } from 'components/TextField'
import { Dispatch, SetStateAction } from 'react'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'
import { CurrentModal, User } from '../../types/types'

import { setCookie } from 'nookies'
import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../../service/api'
import { toast } from 'react-toastify'

type SecurityContactData = Pick<User, 'emergencyName' | 'emergencyPhone'>

type EmergencyContactProps = {
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

export const EmergencyContact = ({
  setCurrentModal
}: EmergencyContactProps) => {
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
        const response = await api.patch<{ updatedUser: User }>('/users', {
          updatedUser
        })
        setUser(response.data.updatedUser)
        setCookie(undefined, 'joinMeUser', JSON.stringify(updatedUser), {
          maxAge: 60 * 60 * 24 * 30, //30 days
          path: '/'
        })
        toast.success('Contato salvo com sucesso')
        setCurrentModal('interests')
      } catch (error) {
        console.log(error)
        setCurrentModal('idle')
      }
    }
  }

  return (
    <>
      <S.LogoContainer>
        <img src="img/emergencySiren.svg" alt="Icone de uma sirene" />
      </S.LogoContainer>

      <S.TitleAndDescription>
        <S.H1>Você gostaria de adicionar um contato para emergências?</S.H1>
        <S.Description>
          O contato serve para o organizador do evento enviar uma mensagem a
          alguém que você confia, caso você não se sinta bem ou tenha alguma
          emergência e precise de ajuda. O organizador poderá mandar uma
          mensagem ou ligar para o número quando ele informar uma emergência
          durante o evento.
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
            label="Qual é o celular dele?"
            type="text"
            placeholder="(99) 9 9999-9999"
            fullWidth={true}
            {...register('emergencyPhone')}
          />
        </S.InputsContainer>

        <S.ButtonsContainer>
          <Button bgColor="primary" type="submit" fullWidth={true}>
            ADICIONAR CONTATO
          </Button>
          <S.SkipStep onClick={() => setCurrentModal('interests')}>
            PULAR
          </S.SkipStep>
        </S.ButtonsContainer>
      </S.FormContainer>
    </>
  )
}
