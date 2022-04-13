import styled, { css, DefaultTheme } from 'styled-components'
import { TagProps } from '.'

type WrapperProps = Pick<TagProps, 'fill'>

const wrapperModifiers = {
  fill: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, fill }) => css`
    width: 8rem;
    height: 4rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius.xlarge};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    ${fill && wrapperModifiers.fill(theme)}
  `}
`
