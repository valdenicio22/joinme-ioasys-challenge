import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { withSSRAuth } from 'utils/withSSRAuth'
import { useAuth } from 'context/AuthContext'

import Arrow from 'components/Arrow'
import Logo from 'components/Logo'

import * as S from './styles'

export default function Me() {
  const { user } = useAuth()

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
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
