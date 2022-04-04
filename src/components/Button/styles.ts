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
        margin-left: 0.8rem;
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, fullWidth, hasIcon }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    padding: 0.65rem 3rem;
    border-radius: ${theme.border.radius.xlarge};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;

    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon()}
  `}
`
