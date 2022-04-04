import { IoPersonCircleOutline } from 'react-icons/io5'
import * as S from './styles'

export const SignUpButton = () => {
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    <S.Wrapper>
      <IoPersonCircleOutline color="#04d361" />
      Bem-vindo: Pessoa
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <IoPersonCircleOutline color="#eba417" />
      Increva-se Aqui
    </S.Wrapper>
  )
}

export default SignUpButton
