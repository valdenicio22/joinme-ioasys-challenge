import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 7.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.5rem;
`

export const LogoBtnContainer = styled.button`
  background-color: transparent;
  outline: none;
  border: none;

  div > svg {
    width: 13rem;
    height: 5rem;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  transition: filter 0.5s;
  font-size: 1.5rem;
`

export const NavButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: transparent;
    outline: none;
    border: none;
    font-size: ${theme.font.sizes.medium};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const LoggedInMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
