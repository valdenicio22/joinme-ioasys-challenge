import { withSSRAuth } from 'utils/withSSRAuth'
import { GetServerSideProps } from 'next'

import * as S from './style'
export default function SavedEvents() {
  return <S.Wrapper>Em construção...</S.Wrapper>
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})