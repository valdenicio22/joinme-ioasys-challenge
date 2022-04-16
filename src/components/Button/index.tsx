import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
  bgColor?: 'primary' | 'lighterGray' | 'white'
  colorText?: 'primary' | 'white' | 'secondary'
  size?: 'large'
  borderColor?: 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  fullWidth = false,
  bgColor = 'primary',
  colorText = 'white',
  size,
  borderColor,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    hasIcon={!!icon}
    bgColor={bgColor}
    colorText={colorText}
    size={size}
    borderColor={borderColor}
    {...props}
  >
    <span>{children}</span>
    {!!icon && icon}
  </S.Wrapper>
)
export default Button
