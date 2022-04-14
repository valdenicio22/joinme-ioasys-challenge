import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
  bgColor?: 'primary' | 'lighterGray'
  colorText?: 'primary' | 'white'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  fullWidth = false,
  bgColor = 'primary',
  colorText = 'white',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    hasIcon={!!icon}
    bgColor={bgColor}
    colorText={colorText}
    {...props}
  >
    <span>{children}</span>
    {!!icon && icon}
  </S.Wrapper>
)
export default Button
