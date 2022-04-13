import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  margin-bottom: 5rem;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const H2 = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xlarge};
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
export const SwitchContainer = styled.div`
  width: 100%;
  padding-left: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    ${({ theme }) => theme.colors.darkGray};
  }
`

export const SigninBtnAndForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 2.5rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  button {
    width: 18rem;
  }
`

export const SignupInfo = styled.p`
  margin-top: 5rem;
  ${({ theme }) => theme.colors.darkGray}
`

export const ForgotPasswordBtn = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    transform: filter 1.5s;
    cursor: pointer;

    &:hover {
      font-weight: ${theme.font.weight.semiBold};
      text-decoration: none;
      filter: brightness(0.8);
    }
  `}
`

export const SignupBtn = styled.span`
  ${({ theme }) => css`
    text-decoration: underline;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    transform: filter 1.5s;
    cursor: pointer;

    &:hover {
      font-weight: ${theme.font.weight.semiBold};
      text-decoration: none;
      filter: brightness(0.8);
    }
  `}
`
