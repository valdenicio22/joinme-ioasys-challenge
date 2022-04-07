import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'fullWidth'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border-radius: 0.5rem;
    padding: 0 1.5rem;
    border: 0.2rem solid;
    border-color: ${theme.colors.mediumGray};
    margin-top: 0.3rem;
    &:focus-within {
      border-color: #2072ac;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: 1.5rem 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    margin-left: 1.5rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  width: 2rem;

  & > svg {
    width: 100%;
  }
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.redError};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.redError};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.redError};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 0.2rem;
    margin-left: 1.5rem;
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, fullWidth }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
  `}
`
