import styled, { css } from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkPurple};
    padding-left: 1.5rem;
  `}
`

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

export const SkipStep = styled.span`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
