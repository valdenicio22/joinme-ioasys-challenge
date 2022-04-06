import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
}

const Checkbox = ({ label, labelFor = '' }: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
  </S.Wrapper>
)

export default Checkbox
