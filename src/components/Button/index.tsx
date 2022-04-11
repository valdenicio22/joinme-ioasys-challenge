import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
  bgColor?: 'primary' | 'darkGray'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  fullWidth = false,
  bgColor = 'primary',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    hasIcon={!!icon}
    bgColor={bgColor}
    {...props}
  >
    <span>{children}</span>
    {!!icon && icon}
  </S.Wrapper>
)
export default Button
