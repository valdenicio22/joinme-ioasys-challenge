import * as S from './styles'

export const AppInfoCards = () => {
  return (
    <S.CardWrapper>
      <S.CardContainer>
        <img src="/img/peopleIcon.svg" alt="participe de eventos icone" />
        <S.CardTitle>Participe de eventos</S.CardTitle>
        <S.CardDescription>
          A gente sabe que a rotina pode ser bem estressante e cansativa. Mas
          que tal aproveitar o seu tempo livre fazendo atividades do seu
          interesse e se conectando com pessoas novas? Um incentivo a mais pra
          cuidar da saúde em eventos voltados ao bem-estar.
        </S.CardDescription>
      </S.CardContainer>

      <S.CardContainer>
        <img src="/img/spreadIcon.svg" alt="divulgue eventos icone" />
        <S.CardTitle>Divulgue seu evento</S.CardTitle>
        <S.CardDescription>
          Universidades, empresas locais e profissionais autônomos podem
          divulgar seus eventos voltados ao bem-estar na plataforma, gratuitos
          ou com valores acessíveis, para que as pessoas conheçam o seu serviço
          ou participem das ações promovidas.
        </S.CardDescription>
      </S.CardContainer>

      <S.CardContainer>
        <img src="/img/startIcon.svg" alt="Funcionalidades extras icone" />
        <S.CardTitle>Funcionalidades extras</S.CardTitle>
        <S.CardDescription>
          O usuário consegue monitorar seu humor da semana, ver dicas de
          bem-estar e criar/divulgar também seus próprios eventos para a
          comunidade. Também é possível indicar se possui alguma deficiência e
          buscar eventos acessíveis, dentre outros.
        </S.CardDescription>
      </S.CardContainer>
    </S.CardWrapper>
  )
}
