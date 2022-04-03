import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 30rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.black};

  border: 1px solid white;
  padding: 2rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.sizes.medium};

  svg {
    width: 15px;
    height: 15px;
  }
`
