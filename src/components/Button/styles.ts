import styled, { css } from 'styled-components'
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

      & + span {
        margin-right: 1rem;
      }
    }
  `,
  changeBgColor: (bgColor: 'primary' | 'lighterGray') => css`
    background-color: ${({ theme }) => theme.colors[bgColor]};
  `,
  changeColor: (colorText: 'white' | 'primary') => css`
    color: ${({ theme }) => theme.colors[colorText]};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, fullWidth, hasIcon, bgColor, colorText }) => css`
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
  `}
`
