import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.7rem 1.7rem 1.4rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
`
