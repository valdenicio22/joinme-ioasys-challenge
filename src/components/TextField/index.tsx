import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction
} from 'react'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  error?: string
  icon?: React.ReactNode
  labelIcon?: React.ReactNode
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    icon,
    label,
    labelIcon,
    labelFor = '',
    fullWidth = false,
    error,
    ...props
  }: TextFieldProps,
  ref
) => {
  return (
    <S.Wrapper error={!!error} fullWidth={fullWidth}>
      <S.LabelContainer>
        {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
        {!!labelIcon && <S.LabelIcon>{labelIcon}</S.LabelIcon>}
      </S.LabelContainer>
      <S.InputWrapper>
        <S.Input type="text" {...props} ref={ref} />
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export const TextField = forwardRef(InputBase)
