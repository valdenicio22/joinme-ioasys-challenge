import styled from 'styled-components'

export const Wrapper = styled.div``

export const MainContainer = styled.main`
  max-width: 112rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SectionContainer = styled.section`
  span {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin: 2.5rem 0;
  }

  button {
    width: 32rem;
  }

  transition: filter 0.2;
  button:hover {
    filter: brightness(0.8);
  }
`

export const ImgContainer = styled.img``
