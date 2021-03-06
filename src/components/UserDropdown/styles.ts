import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 20rem;
    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const Username = styled.span`
  padding: 0 0.8rem;
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: 1.2rem 2rem;
    transition: background, color, 0.3s ease-in-out;
    &:hover {
      background: ${theme.colors.lightPink};
    }
    > svg {
      width: 2.2rem;
      height: 2.2rem;
    }
    > span {
      margin-left: 1.6rem;
    }
  `}
`
