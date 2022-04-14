import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 43rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
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
export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-left: 1rem;
`
export const ErrorMessageContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 2rem;
  color: ${({ theme }) => theme.colors.redError};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`

export const SwitchContainer = styled.div`
  width: 35rem;
  margin: 1rem auto;

  padding-left: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    ${({ theme }) => theme.colors.darkGray};
  }
`

export const SignUpLinkContainer = styled.div`
  margin: 4rem 0 2rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

export const LastInfo = styled.p`
  margin-top: 4.2rem;
  ${({ theme }) => theme.colors.darkGray}

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`
