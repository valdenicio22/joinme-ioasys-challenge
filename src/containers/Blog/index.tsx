import * as S from './styles'

const Blog = () => {
  return (
    <S.Wrapper>
      <S.BlogContainer>
        <S.Welcome>Dicas de bem-estar</S.Welcome>
        <S.BlogCard>
          <S.ImgContainer>
            <img src="/img/blog.png" alt="Descrição da imagem" />
          </S.ImgContainer>
          <S.InfoContainer>
            <S.CardTitle>Chás para dormir melhor</S.CardTitle>
            <S.CardDescription>
              Iniciando o ritual para uma boa noite{' '}
            </S.CardDescription>
          </S.InfoContainer>
        </S.BlogCard>
      </S.BlogContainer>
    </S.Wrapper>
  )
}

export default Blog
