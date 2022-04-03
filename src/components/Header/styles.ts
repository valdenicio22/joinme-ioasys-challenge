import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 8rem;
  background-color: #2f2f33;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`

export const ContentWrapper = styled.div`
  width: 112rem;
  margin: 0 auto;
  height: 100%;

  padding: 0 3.2rem;

  display: flex;
  align-items: center;
  border: 1px solid white;
`
export const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin-left: 8rem;

  display: flex;
  align-items: center;

  a {
    display: inline-block;
    height: 100%;
    line-height: 8rem;
    padding: 0 0.5rem;
    text-decoration: none;

    transition: color 0.2s;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: red;
    }
    &.active {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      border-bottom: 1px solid red;
    }
    & + a {
      margin-left: 2rem;
    }
  }
`
