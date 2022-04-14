import styled, { css } from 'styled-components'

export const ArrowContainer = styled.div`
  margin-bottom: 2.5rem;
  cursor: pointer;
`

export const H1 = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`

export const InterestsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
  cursor: pointer;
  gap: 2rem;
`

export const InterestContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const InterestsImg = styled.img``

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const LinkContainer = styled.a`
  text-decoration: none;
  outline: none;
  cursor: pointer;
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
