import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: auto;
  padding: 6rem 1rem;
`
export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
`

export const FooterItemsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
`

export const LogoContainer = styled.div`
  div > svg {
    width: 13rem;
    height: 5rem;
  }
`

export const CopyRight = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const FooterTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3.2rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const FooterMediasContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  button {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const FooterItem = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
    color: ${theme.colors.white};
  `}
`
export const FooterItemButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    outline: none;
    border: none;

    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
    color: ${theme.colors.white};
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
