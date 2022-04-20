import * as S from './style'

const BlogCard = () => {
  return (
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
  )
}

export default BlogCard
