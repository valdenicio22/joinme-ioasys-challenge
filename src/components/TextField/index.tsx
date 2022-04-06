import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction
} from 'react'
import { FieldError } from 'react-hook-form'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  { label, labelFor = '', error = undefined, ...props }: TextFieldProps,
  ref
) => {
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper isInvalid={!!error}>
        <S.Input type="text" {...props} ref={ref} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export const TextField = forwardRef(InputBase)
