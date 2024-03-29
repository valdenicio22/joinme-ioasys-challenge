import { useEffect, useState } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { withSSRAuth } from 'utils/withSSRAuth'
import { useAuth } from 'context/AuthContext'

import { TextField } from 'components/TextField'
import { Eye, EyeSlash } from '@styled-icons/bootstrap'
import Tag from 'components/Tag'
import Button from 'components/Button'

import { UserInterests, User } from 'types/types'
import { isPasswordVisible } from 'utils/isPasswordVisible'

import * as S from './styles'
import { Edit } from '@styled-icons/material-outlined'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from 'service/api'
import { toast } from 'react-toastify'
import { parseCookies, setCookie } from 'nookies'
import IconLogo from 'components/IconLogo'
import axios from 'axios'

type isVisibleProps = 'text' | 'password'

type UpdateUserInterests = Pick<UserInterests, 'name' | 'id'>
type UserDataForm = Omit<User, 'id' | 'email' | 'isPremium'>

type EditProfileProps = {
  userInterests: UpdateUserInterests[]
}

export default function EditProfile({ userInterests }: EditProfileProps) {
  const { user, setUser } = useAuth()
  const [isVisible, setIsVisible] = useState<isVisibleProps>('password')

  const { register, handleSubmit, setValue } = useForm<UserDataForm>()

  useEffect(() => {
    if (!user) return

    const userDataForm = {
      name: user.name,
      aboutMe: user.aboutMe,
      password: user.password,
      city: user.city,
      emergencyName: user.emergencyName,
      emergencyPhone: user.emergencyPhone,
      phone: user.phone
    }
    const userFields = [
      'name',
      'aboutMe',
      'password',
      'city',
      'emergencyName',
      'emergencyPhone',
      'phone'
    ] as Array<keyof UserDataForm>
    // const userFields = Object.keys(userDataForm) as Array<keyof UserDataForm>
    userFields.forEach((field) => setValue(field, userDataForm[field]))
  }, [setValue, user])

  const onSubmit: SubmitHandler<UserDataForm> = async (formData) => {
    try {
      await api.patch('users', { ...formData })
      toast.success('Usuário atualizado com sucesso')
      if (!user) return
      const updatedUser = {
        ...formData,
        id: user.id,
        email: user.email,
        isPremium: user.isPremium
      }
      setUser(updatedUser)
      setCookie(undefined, 'joinMeToken', JSON.stringify(formData), {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/'
      })
      Router.push('/home')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response.status === 409) {
        toast.error('E-mail já cadastrado!')
      }
    }
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Edit Profile | joinMe</title>
      </Head>

      <S.LogoAndName>
        <IconLogo />
        <S.PersonName>{user?.name}</S.PersonName>
      </S.LogoAndName>

      <S.AccountInfo>
        <S.SmallInfoCard>
          2 <span>Eventos</span>
        </S.SmallInfoCard>
        <S.SmallInfoCard>
          2 <span>Badge</span>
        </S.SmallInfoCard>
        <S.SmallInfoCard>
          140 <span>minutos</span>
        </S.SmallInfoCard>
      </S.AccountInfo>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.InterestsContainer>
          <S.LabelContainer>
            <label htmlFor="Interesses">Interesses</label>
            <Edit size={20} />
          </S.LabelContainer>

          <S.Interests>
            {userInterests.map((interest) => (
              <Tag colorText="primary" key={interest.id}>
                {interest.name}
              </Tag>
            ))}
          </S.Interests>
        </S.InterestsContainer>

        <S.TextFieldsContainer>
          <S.AboutMe>
            <S.LabelContainer>
              <label htmlFor="about me">Sobre mim</label>
              <Edit size={20} />
            </S.LabelContainer>

            <TextField
              label="Sobre mim"
              type="text"
              {...register('aboutMe')}
              fullWidth={true}
            />
          </S.AboutMe>
          <TextField
            label="Como podemos te chamar?"
            type="text"
            {...register('name', {
              required: true
            })}
            fullWidth={true}
          />
          <TextField
            label="Cidade"
            type="text"
            {...register('city')}
            placeholder="Fortaleza"
            fullWidth={true}
          />
          <TextField
            label="Telefone"
            type="text"
            {...register('phone')}
            placeholder="(99) 9 9999 9999"
            fullWidth={true}
          />
          <TextField
            label="Contato de segurança"
            type="text"
            {...register('emergencyName')}
            placeholder="Familiar"
            fullWidth={true}
          />
          <TextField
            label="Telefône de segurança"
            type="text"
            {...register('emergencyPhone')}
            placeholder="(99) 9 9999 9999"
            fullWidth={true}
          />
          <TextField
            label="Digite uma senha"
            type={isVisible}
            {...register('password', {
              minLength: 6
            })}
            fullWidth={true}
            icon={
              isVisible === 'password' ? (
                <EyeSlash
                  onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
                />
              ) : (
                <Eye
                  onClick={(e) => setIsVisible(isPasswordVisible(e, isVisible))}
                />
              )
            }
          />
        </S.TextFieldsContainer>
        <Button fullWidth={true}>Atualizar perfil</Button>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const cookies = parseCookies(ctx)

    const response = await axios.get<Array<UpdateUserInterests>>(
      'https://thiagosgdev.com/users/interests/list',
      {
        headers: {
          Authorization: `Bearer ${cookies.joinMeToken}`
        }
      }
    )
    return {
      props: {
        userInterests: response.data
      }
    }
  }
)
