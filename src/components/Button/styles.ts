import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
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
    border: 0;
    padding: 1rem 3rem;
    border-radius: ${theme.border.radius.xlarge};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    height: 4rem;

    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!bgColor && wrapperModifiers.changeBgColor(bgColor)}
    ${!!colorText && wrapperModifiers.changeColor(colorText)}
    ${!!size && wrapperModifiers.largeButton(theme)}
    ${!!borderColor && wrapperModifiers.changeBorderColor(borderColor)}
  `}
`
