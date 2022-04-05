import * as S from './styles'

export type SwitchProps = {
  onCheckedChange: () => void
  checked: boolean
}

const Switch = ({ onCheckedChange, checked }: SwitchProps) => {
  return (
    <S.Switch onCheckedChange={onCheckedChange} checked={checked}>
      <S.Thumb />
    </S.Switch>
  )
}

export default Switch
