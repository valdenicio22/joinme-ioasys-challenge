import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 16rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: 1.5rem;
  padding-bottom: 2rem;

  display: flex;
  align-items: center;
  gap: 1.3rem;
`

export const ImgContainer = styled.div`
  width: 20rem;
  height: 100%;
  img {
    border-radius: 1rem;
  }
`

export const EventDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const Schedule = styled.p`
  margin-bottom: 1rem;
`

export const Description = styled.p``

export const EventTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};
  `}
`

export const ExtraInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const Participants = styled.span``

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const City = styled.p``

export const Flags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`
