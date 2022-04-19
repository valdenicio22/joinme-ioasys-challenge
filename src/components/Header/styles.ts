import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const LogoBtnContainer = styled.button`
  background-color: transparent;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  div > svg {
    width: 13rem;
    height: 4rem;
  }
`

export const NavContainer = styled.nav`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};
    line-height: 2.7rem;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    gap: 3rem;
  `}
`

export const NavButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: transparent;
    outline: none;
    border: none;
    font-size: ${theme.font.sizes.large};

    &:hover {
      color: ${theme.colors.secondary};
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`

export const LoggedInMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
