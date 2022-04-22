import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  withLeftIcon: () => css`
    svg {
      margin-right: 1rem;
    }
  `,
  withRightIcon: () => css`
    svg {
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
  changeBorderColor: (borderColor: 'secondary' | 'white') => css`
    border: 2px solid ${({ theme }) => theme.colors[borderColor]};
  `,
  squareButton: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius.medium};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    fullWidth,
    leftIcon,
    rightIcon,
    bgColor,
    colorText,
    size,
    borderColor,
    format
  }) => css`
    width: 15.3rem;
    height: 4.2rem;
    padding: 0.8rem 2.5rem;
    border-radius: ${theme.border.radius.large};
    font-size: ${theme.font.sizes.large};
    line-height: 2.7rem;
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!leftIcon && wrapperModifiers.withLeftIcon()}
    ${!!rightIcon && wrapperModifiers.withRightIcon()}
    ${!!bgColor && wrapperModifiers.changeBgColor(bgColor)}
    ${!!colorText && wrapperModifiers.changeColor(colorText)}
    ${size === 'large' && wrapperModifiers.largeButton(theme)}
    ${size === 'small' && wrapperModifiers.smallButton(theme)}
    ${!!borderColor && wrapperModifiers.changeBorderColor(borderColor)}
    ${!!format && wrapperModifiers.squareButton(theme)}
  `}
`
