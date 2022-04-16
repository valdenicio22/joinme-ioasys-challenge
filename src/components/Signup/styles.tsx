import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const H1 = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`
export const TextFieldsContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  & > div {
    margin-bottom: 1.5rem;
  }
`

export const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 3rem;
`
export const PTerms = styled.p``

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`
export const SignupButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  ${({ theme }) => css`
    button {
      font-weight: ${theme.font.weight.bold};
    }
  `};
`

export const SigninInfo = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin-top: 2rem;
`

export const PSignIn = styled.p``

export const SpanSignin = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;

    &:hover {
      font-weight: ${theme.font.weight.bold};
    }
  `}
`
