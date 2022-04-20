import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    width: 100%;
    margin: 0 auto;
  `}
`

export const FiltersContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  select {
    width: 270px;
    height: 4.5rem;
  }
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

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Welcome = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3rem;
    padding: 3rem 0;
  `}
`
export const Boosted = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(36rem, 1fr);
  gap: 0 2rem;
  a {
    text-decoration: none;
  }
`
export const Recommended = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(36rem, 1fr));
  gap: 2rem 2.5rem;
  a {
    text-decoration: none;
  }
`
