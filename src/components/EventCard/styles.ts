import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 16rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 1.8rem 0;

  display: flex;
  align-items: center;
  gap: 1.3rem;
`

export const ImgContainer = styled.div`
  width: 16rem;
  height: 12.5rem;
  margin-top: 2.5rem;
  img {
    border-radius: 1rem;
  }
`

export const EventDetails = styled.div`
  width: 100%;
  height: 12.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Schedule = styled.div``

export const EventTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};
  `}
`

export const Participants = styled.div``

export const Flags = styled.div`
  margin-top: 1rem;
`
