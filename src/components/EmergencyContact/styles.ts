import styled, { css } from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`
export const TitleAndDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`

export const H1 = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1.5rem;
    font-weight: ${theme.font.weight.regular};
    line-height: 2.2rem;
    color: ${theme.colors.black};
  `}
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`

export const SkipStep = styled.span`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};

    &:hover {
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`
