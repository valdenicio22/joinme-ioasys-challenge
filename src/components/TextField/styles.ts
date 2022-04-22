import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'fullWidth'> & { error?: boolean }

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`
export const LabelIcon = styled.div`
  div > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.5rem;
    margin-top: 0.4rem;

    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.darkGray};
    &:focus-within {
      border-color: #2072ac;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.5rem 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    background: transparent;
    border: 0;
    outline: none;
  `}
`

export const Icon = styled.div`
  & > button > svg {
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
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, fullWidth }) => css`
    width: 100%;
    ${error && wrapperModifiers.error(theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
  `}
`
