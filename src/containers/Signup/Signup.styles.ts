import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 43rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 4rem 3.2rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 3rem 0;
`

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.darkPurple};
  padding-left: 1.5rem;
`
export const ErrorMessageContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 2rem;
  color: ${({ theme }) => theme.colors.redError};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`

export const SwitchContainer = styled.div`
  padding-left: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  p {
    span {
      ${({ theme }) => theme.colors.darkGray};
    }
  }
`
