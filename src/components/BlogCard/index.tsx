import * as S from './style'
import { Wellness } from 'types/types'

type BlogCardProps = {
  card: Wellness
}

const BlogCard = ({ card }: BlogCardProps) => {
  return (
    <S.BlogCard>
      <S.ImgContainer>
        <img src={card.imageUrl} alt={card.description} />
      </S.ImgContainer>
      <S.InfoContainer>
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.CardDescription>{card.description}</S.CardDescription>
      </S.InfoContainer>
    </S.BlogCard>
  )
}

export default BlogCard
