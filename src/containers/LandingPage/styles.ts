import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const WelcomeWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%
    height: 74.4rem;
    background-color: ${theme.colors.primary};
  `}
`
export const WelcomeContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
  padding-bottom: 8rem;
`

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 57.6rem;
  height: 100%;
  border: none;
  outline: none;

  position: relative;
`

export const WelcomeInfo = styled.section`
  width: 38.8rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;
  left: 7rem;
  bottom: 5rem;

  transition: filter 0.2;
  button:hover {
    filter: brightness(0.8);
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    padding: 3rem 0;
  `}
`
export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      width: 20rem;
      height: 4.8rem;
      padding: 1rem 2.4rem;
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.large};
      border: none;
    }
    & button:last-child {
      width: 14rem;
      padding: 1rem;
    }
  `}
`
//Cards App Explanation
export const CardsInfoWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%
    height: 40.5rem;
    background-color: ${theme.colors.mediumGray};
  `}
`

export const CardsInfoContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${({ theme }) => theme.containers.desktop};
    margin: 0 auto;
    width: 100%
    height: 100%
    background-color: ${theme.colors.white};
    padding: 3rem 0;
  `}
`

//How Works
export const HowWorksWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%
    height: 50rem;
    background-color: ${theme.colors.white};
  `}
`
export const HowWorksContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
`

export const HowWorksTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
    padding-bottom: 2rem;

    position: absolute;
    top: 4rem;
  `}
`
// Groups Princing
export const GroupsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%
    height: 50rem;
    background-color: ${theme.colors.mediumGray};
  `}
`
export const GroupsContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

//App Cards

export const AppCardsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%
    background-color: ${theme.colors.white};
  `}
`
export const AppCardContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
`
export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;

  a {
    ${({ theme }) => css`
      text-decoration: none;
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.primary};
    `}
  }
`

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.secondary};
  `}
`
export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
`
