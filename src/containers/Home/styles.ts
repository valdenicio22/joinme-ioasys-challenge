import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.containers.desktop};
  height: 100%;
  margin: 0 auto;
`

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column nowrap;
  margin-bottom: 3rem;
`

export const MainLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    ${({ theme }) => css`
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: ${theme.colors.primary};
        font-weight: ${theme.font.weight.bold};
      }
    `}
  }
`

export const FiltersContainer = styled.div`
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    border-radius: 2rem;
    width: 15rem;
  }
`

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Welcome = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const EventCardContainer = styled.main`
  border: 1px solid black;
  width: 100%;
  gap: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const CardButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;

  cursor: pointer;
`
