import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
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

export const TermsContainer = styled.div`
  padding-left: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 3rem;
`
export const PTerms = styled.p``

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.darkPurple};
`
