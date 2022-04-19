import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
  `,
  changeBgColor: (bgColor: 'primary' | 'lighterGray' | 'white') => css`
    background-color: ${({ theme }) => theme.colors[bgColor]};
  `,
  changeColor: (colorText: 'white' | 'primary' | 'secondary') => css`
    color: ${({ theme }) => theme.colors[colorText]};
  `,
  largeButton: (theme: DefaultTheme) => css`
    width: 18rem;
    height: 5rem;
    border-radius: 1.3rem;
    font-weight: ${theme.font.weight.semiBold};
  `,
  changeBorderColor: (borderColor: 'secondary') => css`
    border: 1px solid ${({ theme }) => theme.colors[borderColor]};
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
    borderColor
  }) => css`
    width: 15rem;
    height: 4rem;
    padding: 0.8rem 2.8rem;
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
    ${!!size && wrapperModifiers.largeButton(theme)}
    ${!!borderColor && wrapperModifiers.changeBorderColor(borderColor)}
  `}
`
