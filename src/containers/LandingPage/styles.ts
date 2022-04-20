import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const WelcomeWrapper = styled.div`
  ${({ theme }) => css`
    width: 144rem;
    height: 74.4rem;
    background-color: ${theme.colors.primary};
  `}
`

export const ImageContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  margin: 0 auto;

  width: 100%;
  max-height: 57.6rem;
  height: 100%;
  border: none;
  outline: none;

  position: relative;
  padding-bottom: 3rem;
`

export const WelcomeContainer = styled.section`
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

export const HowWorksWrapper = styled.div`
  ${({ theme }) => css`
    width: 144rem;
    height: 74.4rem;
    background-color: ${theme.colors.white};
  `}
`
export const HowWorksContent = styled.div`
  ${({ theme }) => css`
    max-width: ${({ theme }) => theme.containers.desktop};
    margin: 0 auto;
    width: 100%
    height: 100%
    background-color: ${theme.colors.white};
    padding-top: 3rem;
  `}
`
export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
    padding-bottom: 2rem;
  `}
`
export const HowWorksCardContainer = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    height: 38rem;
    padding: 4rem 2.5rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    border-radius: ${theme.border.radius.large};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  `}
`

export const CardTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};
    padding: 4rem 0 2rem;
  `}
`

export const CardDescription = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: justify;
  `}
`
