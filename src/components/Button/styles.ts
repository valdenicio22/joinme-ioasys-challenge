import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    svg {
      margin-right: 1rem;
    }
  `,
  changeBgColor: (bgColor: 'primary' | 'lighterGray' | 'white') => css`
    background-color: ${({ theme }) => theme.colors[bgColor]};
  `,
  changeColor: (colorText: 'white' | 'primary' | 'secondary') => css`
    color: ${({ theme }) => theme.colors[colorText]};
  `,
  largeButton: (theme: DefaultTheme) => css`
    width: 25rem;
    height: 6rem;
    font-weight: ${theme.font.weight.bold};
  `,
  smallButton: (theme: DefaultTheme) => css`
    width: 13rem;
    height: 4rem;
    padding: 0.6rem 1.5rem;
    border-radius: 1.3rem;
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
  `,
  changeBorderColor: (borderColor: 'secondary') => css`
    border: 1px solid ${({ theme }) => theme.colors[borderColor]};
  `,
  squareButton: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius.medium};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    fullWidth,
    hasIcon,
    bgColor,
    colorText,
    size,
    borderColor,
    format
  }) => css`
    width: 15.3rem;
    height: 4.2rem;
    padding: 0.8rem 2.5rem;
    border: 0.2rem solid;
    border-radius: ${theme.border.radius.large};
    border-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    line-height: 2.7rem;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!bgColor && wrapperModifiers.changeBgColor(bgColor)}
    ${!!colorText && wrapperModifiers.changeColor(colorText)}
    ${size === 'large' && wrapperModifiers.largeButton(theme)}
    ${size === 'small' && wrapperModifiers.smallButton(theme)}
    ${!!borderColor && wrapperModifiers.changeBorderColor(borderColor)}
    ${!!format && wrapperModifiers.squareButton(theme)}
  `}
`
