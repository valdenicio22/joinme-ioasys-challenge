import Arrow from 'components/Arrow'
import * as S from './styles'

const Profile = () => {
  return (
    <S.Wrapper>
      <Arrow />
      <S.H1>Configurações</S.H1>
      <S.ItemContainer>
        <S.IconContainer />

        <S.Item>Editar perfil</S.Item>
      </S.ItemContainer>
    </S.Wrapper>
  )
}

export default Profile
