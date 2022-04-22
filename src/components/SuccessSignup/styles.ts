import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  button {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    transition: filter 0.15s;
    &:hover {
      filter: brightness(0.85);
    }
  }
`
