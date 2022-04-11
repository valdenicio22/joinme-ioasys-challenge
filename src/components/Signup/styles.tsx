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

export const H3 = styled.h3`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.darkPurple};
    padding-left: 1.5rem;
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
  color: ${({ theme }) => theme.colors.darkPurple};
`
export const SignupButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  button + button {
    margin-bottom: 2rem;
  }
`

export const SigninInfo = styled.div``

export const PSignIn = styled.p``

export const SpanSignin = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`
