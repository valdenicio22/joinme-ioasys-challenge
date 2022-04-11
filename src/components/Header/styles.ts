import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.5rem;
`

export const LogoBtnContainer = styled.button`
  max-width: 150px;
  height: 40px;
  background-color: transparent;
  outline: none;
  border: none;
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
    text-decoration: none;
    color: ${theme.colors.black};
    background-color: transparent;
    outline: none;
    border: none;
    font-size: ${theme.font.sizes.small};

    &:hover {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

export const LoggedInMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
