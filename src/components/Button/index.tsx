import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
  bgColor?: 'primary' | 'lighterGray' | 'white'
  colorText?: 'primary' | 'white' | 'secondary'
  size?: 'large' | 'small'
  borderColor?: 'secondary'
  format?: 'square'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  icon,
  fullWidth = false,
  bgColor,
  colorText = 'white',
  size,
  borderColor,
  format,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    hasIcon={!!icon}
    bgColor={bgColor}
    colorText={colorText}
    size={size}
    borderColor={borderColor}
    format={format}
    {...props}
  >
    {!!icon && icon}
    <span>{children}</span>
  </S.Wrapper>
)
export default Button
