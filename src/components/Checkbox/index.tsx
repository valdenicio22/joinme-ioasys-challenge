import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ label, labelFor = '', ...props }: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" {...props} required />
    {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
  </S.Wrapper>
)

export default Checkbox
