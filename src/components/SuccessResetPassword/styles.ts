import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const FeedBackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
    padding-bottom: 1rem;
  `}
`
export const Info = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
  `}
`
export const ImageContainer = styled.div`
  width: 100%;
  padding: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 6rem 0 2rem;
  button {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    transition: filter 0.15s;
    &:hover {
      filter: brightness(0.85);
    }
  }
`

export const FooterInfo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    padding-bottom: 1rem;
  `}
`

export const Retry = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
    transition: filter 0.15s;
    &:hover {
      filter: brightness(0.85);
    }
  `}
`
