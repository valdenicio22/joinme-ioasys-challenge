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
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    icon,
    label,
    labelFor = '',
    fullWidth = false,
    error,
    ...props
  }: TextFieldProps,
  ref
) => {
  return (
    <S.Wrapper error={!!error} fullWidth={fullWidth}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type="text" {...props} ref={ref} />
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export const TextField = forwardRef(InputBase)
