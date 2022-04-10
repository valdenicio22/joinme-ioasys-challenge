import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 4rem;
`

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 2rem 0;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`

export const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;

  background-color: #ccc;
  border-radius: 50%;
`

export const Item = styled.span``
