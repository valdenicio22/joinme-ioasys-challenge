import Button from '../../components/Button'
import { TextField } from '../../components/TextField'
import Fakelogo from 'components/Fakelogo'

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { withSSRAuth } from '../../utils/withSSRAuth'
import { useAuth } from 'context/AuthContext'
import { User } from 'types/types'

import * as S from './Dashboard.styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from 'service/api'
import { setCookie } from 'nookies'

import { useState } from 'react'
import { Dialog } from 'components/Dialog'

type SecurityContactData = Pick<User, 'emergencyName' | 'emergencyPhone'>

export default function Dashboard() {
  const { user, setUser } = useAuth()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIsModalOpen = () => setIsModalOpen(true)
  const onCloseModal = () => setIsModalOpen(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SecurityContactData>()

  const onSubmit: SubmitHandler<SecurityContactData> = async (formData) => {
    if (formData) {
      const updatedUser = {
        ...user!,
        emergencyName: formData.emergencyName,
        emergencyPhone: formData.emergencyPhone
      }
      try {
        await api.put('/users', { updatedUser })
        setUser(updatedUser)
        setCookie(undefined, 'joinMeUser', JSON.stringify(updatedUser), {
          maxAge: 60 * 60 * 24 * 30, //30 days
          path: '/'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Dashboard | joinMe</title>
      </Head>
      <button onClick={handleIsModalOpen}>Modal</button>
      <Dialog isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
        <S.LogoContainer>
          <Fakelogo />
        </S.LogoContainer>
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.TitleContainer>
            <S.H2>
              Gostaria de adiconar <br /> um contato de segurança ?
            </S.H2>
          </S.TitleContainer>
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
            {...register('emergencyPhone', {
              required: true
            })}
            fullWidth={true}
            error={errors.emergencyPhone?.type === 'required' ? 'Phone' : ''}
          />
        </S.FormContainer>
        <Button>Pular</Button>
        <Button>proximo</Button>
      </Dialog>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
