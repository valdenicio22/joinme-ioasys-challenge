import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  background?: 'primary'
  colorText?: 'primary' | 'secondary' | 'darkGray'
  borderColor?: 'primary' | 'secondary' | 'darkGray'
  size?: 'small'
}

const Tag = ({
  children,
  background,
  colorText = 'primary',
  size,
  borderColor
}: TagProps) => (
  <S.Wrapper
    background={background}
    colorText={colorText}
    size={size}
    borderColor={borderColor}
  >
    {children}
  </S.Wrapper>
)

export default Tag
