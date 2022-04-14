import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  margin-bottom: 4rem;
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
export const SwitchContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    ${({ theme }) => theme.colors.darkGray};
  }
`

export const SwitchAndForgotPassword = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.sizes.small};
`
export const SigninButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 5.5rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

export const SignupInfo = styled.p`
  margin-top: 2rem;
  ${({ theme }) => theme.colors.darkGray}
`

export const ForgotPasswordBtn = styled.span`
  ${({ theme }) => css`
    width: 25rem;
    color: ${theme.colors.primary};
    transform: filter 0.3s;
    cursor: pointer;
    text-align: end;

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
