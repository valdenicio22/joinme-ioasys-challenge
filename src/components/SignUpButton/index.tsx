import { BsFillPersonFill } from 'react-icons/bs'
import * as S from './styles'

export const SignUpButton = () => {
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    <S.Wrapper>
      <BsFillPersonFill color="#04d361" />
      Increva-se Aqui
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <BsFillPersonFill color="#eba417" />
      Increva-se Aqui
    </S.Wrapper>
  )
}

export default SignUpButton
