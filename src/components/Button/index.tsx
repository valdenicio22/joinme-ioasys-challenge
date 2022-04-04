import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => (
  <S.Wrapper>{<span>{children}</span>}</S.Wrapper>
)
export default Button
