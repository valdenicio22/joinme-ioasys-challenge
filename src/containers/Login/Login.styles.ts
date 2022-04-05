import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 42rem;
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
  margin: 8rem 0;
`

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.lightPurple};
  margin-left: 1rem;
`

export const SwitchContainer = styled.div`
  width: 35rem;
  margin: -0.5rem auto;

  padding-left: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    ${({ theme }) => theme.colors.darkGray};
  }
`

export const P = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin: 5rem 0 2rem;
`

export const LastInfo = styled.p`
  margin-top: 4.7rem;
  ${({ theme }) => theme.colors.darkGray}

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`
