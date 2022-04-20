import BlogCard from 'components/BlogCard'
import * as S from './styles'

type FakeArray = {
  id: number
}

const Blog = () => {
  const fakeArray: FakeArray[] = []
  for (let i = 0; i < 9; i++) {
    fakeArray.push({ id: i + 1 })
  }
  return (
    <S.Wrapper>
      <S.BlogContainer>
        <S.Welcome>Dicas de bem-estar</S.Welcome>
        {fakeArray.map((card) => (
          <BlogCard key={card.id} />
        ))}
      </S.BlogContainer>
    </S.Wrapper>
  )
}

export default Blog
