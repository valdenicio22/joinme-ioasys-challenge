import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    <span>{children}</span>
  </S.Wrapper>
)
export default Button
