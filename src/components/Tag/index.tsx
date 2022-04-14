import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  fill?: boolean | undefined
}

const Tag = ({ children, fill }: TagProps) => (
  <S.Wrapper fill={fill}>{children}</S.Wrapper>
)

export default Tag
