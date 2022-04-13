import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 2rem auto;
  `}
  border: 1px solid black;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ArrowContainer = styled.button`
  background: transparent;
  outline: none;
  border: none;

  color: ${({ theme }) => theme.colors.primary};
`

export const Page = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const LogoAndName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PersonName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 3rem;
  `}
`

export const AccountInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SmallInfoCard = styled.div`
  width: 10rem;
  height: 8rem;
  background-color: #dedaf0;
  color: #4c33fd;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  flex-direction: column;

  span {
    color: #757678;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`

export const Level = styled.div`
  width: 100%;
  height: 8rem;
  background-color: '#ccc';
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lighterBlue};
`

export const Minuts = styled.div`
  width: 100%;
  height: 8rem;
  background-color: '#ccc';
  border: 1px solid black;
  border-radius: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lighterBlue};
`
