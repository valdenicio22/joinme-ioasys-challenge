import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { withSSRAuth } from 'utils/withSSRAuth'
import { useAuth } from 'context/AuthContext'

import Arrow from 'components/Arrow'
import Logo from 'components/Logo'
import { TextField } from 'components/TextField'

import * as S from './styles'
import { Edit } from '@styled-icons/material-outlined'
import { useEffect, useState } from 'react'
import { api } from 'service/api'
import { UserInterests } from 'types/types'
import Tag from 'components/Tag'

export default function Me() {
  const { user } = useAuth()
  const [userInterests, setUserInteresests] = useState<UserInterests[]>([])

  useEffect(() => {
    api
      .get<Array<UserInterests>>('/users/interests/list')
      .then((response) => setUserInteresests(response.data))
  }, [])

  return (
    <S.Wrapper>
      <S.Header>
        <S.ArrowContainer onClick={() => Router.push('/dashboard')}>
          <Arrow />
        </S.ArrowContainer>
        <S.Page>Perfil</S.Page>
      </S.Header>

      <S.LogoAndName>
        <Logo />
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

      <S.AboutMe>
        <S.LabelContainer>
          <label htmlFor="about me">Sobre mim</label>
          <Edit size={20} />
        </S.LabelContainer>

        <TextField labelFor="about me" />
      </S.AboutMe>

      <S.InterestsContainer>
        <S.LabelContainer>
          <label htmlFor="about me">Interesses</label>
          <Edit size={20} />
        </S.LabelContainer>

        <S.Interests>
          {userInterests.map((interest) => (
            <Tag key={interest.id}>{interest.name}</Tag>
          ))}
        </S.Interests>
      </S.InterestsContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  //Make the interests user info request on server side
  return {
    props: {}
  }
})
