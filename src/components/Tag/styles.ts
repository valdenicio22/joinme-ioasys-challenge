import styled, { css, DefaultTheme } from 'styled-components'
import { TagProps } from '.'

type WrapperProps = Omit<TagProps, 'children'>

const wrapperModifiers = {
  fill: (theme: DefaultTheme, background: 'primary') => css`
    background-color: ${theme.colors[background]};
    color: ${theme.colors.white};
  `,
  colorText: (
    theme: DefaultTheme,
    colorText: 'primary' | 'secondary' | 'darkGray'
  ) => css`
    color: ${theme.colors[colorText]};
  `,
  borderColor: (
    theme: DefaultTheme,
    borderColor: 'primary' | 'secondary' | 'darkGray'
  ) => css`
    border-color: ${theme.colors[borderColor]};
  `,
  smallSize: (theme: DefaultTheme) => css`
    width: fit-content;
    height: 2rem;
    border: 1px solid ${theme.colors.darkGray};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, background, colorText, size, borderColor }) => css`
    width: fit-content;
    padding: 1.2rem 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius.large};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    ${background && wrapperModifiers.fill(theme, background)}
    ${colorText && wrapperModifiers.colorText(theme, colorText)}
    ${borderColor && wrapperModifiers.borderColor(theme, borderColor)}
    ${size && wrapperModifiers.smallSize(theme)}
  `}
`
