import { GetServerSideProps } from 'next'
import { withSSRGuest } from 'utils/withSSRGuest'
import * as S from './ForgotPassword'

export default function ForgotPassword() {
  return <S.Wrapper>Esqueceu a senha Page</S.Wrapper>
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {}
  }
})
