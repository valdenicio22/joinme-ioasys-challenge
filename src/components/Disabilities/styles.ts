import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  isSelect?: boolean
}

export const Wrapper = styled.div``

export const H1 = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.black};
  `}
`

export const DisabilitiesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 2rem;

  margin: 4rem 0;
`

const wrapperModifiers = {
  ChangeSelected: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
  `
}

export const DisabilityButton = styled.button<WrapperProps>`
  ${({ theme, isSelect }) => css`
    background: transparent;
    outline: none;
    border: 2px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
    border-radius: ${theme.border.radius.large};
    transition: filter 0.15s;
    div {
      color: ${theme.colors.secondary};
      ${isSelect && wrapperModifiers.ChangeSelected(theme)}
    }

    &:hover {
      filter: brightness(0.85);
    }
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const FinalizarButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 6rem;
`
export const SkipStep = styled.span`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`
