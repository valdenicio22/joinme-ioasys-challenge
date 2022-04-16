import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
  isDropdrowOpen: boolean
  handleIsDropdownOpen: () => void
}

const Dropdown = ({
  title,
  children,
  isDropdrowOpen,
  handleIsDropdownOpen
}: DropdownProps) => {
  return (
    <S.Wrapper isOpen={isDropdrowOpen}>
      <S.Title onClick={handleIsDropdownOpen}>{title}</S.Title>

      <S.Content aria-hidden={!isDropdrowOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
