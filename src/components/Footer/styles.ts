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
  justify-content: flex-end;
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
`

export const FooterItem = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

export const BottomInfo = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
    line-height: 2.4rem;
  `}
`

export const OutsideConnections = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const SocialMediasContainer = styled.div``

export const FollowUs = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
`

export const MobileButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 0.3rem;

  color: ${({ theme }) => theme.colors.textGray};
`

export const ButtonsLabel = styled.span`
  color: ${({ theme }) => theme.colors.textGray};
`

export const MobileButton = styled.button`
  width: 7rem;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: #000;
  text-align: center;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.textGray};
  color: ${({ theme }) => theme.colors.textGray};
`

export const BottomLink = styled.li`
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
