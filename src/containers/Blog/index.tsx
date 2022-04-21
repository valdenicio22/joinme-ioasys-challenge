import BlogCard from 'components/BlogCard'
import { GetServerSideProps } from 'next'
import { Wellness } from 'types/types'
import * as S from './styles'

type BlogProps = {
  eventData: Array<Wellness>
}

export default function Blog({ eventData }: BlogProps) {
  return (
    <S.Wrapper>
      <S.BlogContainer>
        <S.Welcome>Dicas de bem-estar</S.Welcome>
        <S.BlogCardList>
          {eventData.map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </S.BlogCardList>
      </S.BlogContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await axios.get<Array<Wellness>>(
  //   `https://thiagosgdev.com/wellness/list`
  // )
  return {
    props: {
      eventData: []
    }
  }
}
