import styled, { css, DefaultTheme } from 'styled-components'

import { Activity } from '.'

type InterestProps = Pick<Activity, 'isSelect'>

export const ArrowContainer = styled.div`
  margin-left: 1rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkPurple};
    padding-left: 1.5rem;
  `}
`

export const InterestsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 2rem;
  margin-top: 3rem;
  cursor: pointer;
`
const IconContentModifiers = {
  isSelect: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
  `
}

export const InterestContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const InterestIcon = styled.div<InterestProps>`
  ${({ theme, isSelect }) => css`
    background-color: #ccc;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
    ${isSelect && IconContentModifiers.isSelect(theme)}
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`

export const SkipStep = styled.span`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
