import * as S from './styles'

export type SwitchProps = {
  onCheckedChange: () => void
  checked: boolean
}

const Switch = ({ onCheckedChange, checked, ...props }: SwitchProps) => {
  return (
    <S.Switch onCheckedChange={onCheckedChange} checked={checked} {...props}>
      <S.Thumb />
    </S.Switch>
  )
}

export default Switch
