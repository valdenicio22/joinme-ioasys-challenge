import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 33rem;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgContainer = styled.div`
  position: relative;
  img {
    border-radius: 2rem 0 0 2rem;
  }
`
export const Schedule = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    padding: 0.6rem;
    width: fit-content;

    position: absolute;
    left: 1rem;
    top: 1rem;
    border-radius: 3.2rem;
  `}
`

export const EventDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 21rem;
    height: 100%;
    background-color: ${theme.colors.mediumGray};
    border-radius: 0 2rem 2rem 0;
    border: 1px solid ${theme.colors.lightGray};
    padding: 1rem;
    font-size: ${theme.font.sizes.small};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  `}
`
export const EventTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    margin-bottom: 0.8rem;
    margin-left: 1.7rem;
  `}
`
export const LocationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const City = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
    margin-left: 1.7rem;
  `}
`
export const Street = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Participants = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
    margin-top: 1rem;
    margin-left: 1.7rem;
  `}
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  outline: none;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Flags = styled.div`
  width: 100%;
  max-height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.8rem;
`

export const Description = styled.p``
