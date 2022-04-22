import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  bgColor?: 'primary' | 'lighterGray' | 'white'
  colorText?: 'primary' | 'white' | 'secondary'
  size?: 'large' | 'small'
  borderColor?: 'secondary' | 'white'
  format?: 'square'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  leftIcon,
  rightIcon,
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
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    bgColor={bgColor}
    colorText={colorText}
    size={size}
    borderColor={borderColor}
    format={format}
    {...props}
  >
    {!!leftIcon && leftIcon}
    <span>{children}</span>
    {!!rightIcon && rightIcon}
  </S.Wrapper>
)
export default Button
