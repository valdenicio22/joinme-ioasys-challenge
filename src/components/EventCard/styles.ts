import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 36rem;
  height: 48rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ImgContainer = styled.div`
  position: relative;
  img {
    border-radius: 2rem 2rem 0 0;
  }
`
export const Schedule = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    padding: 0.7rem 1.3rem;

    position: absolute;
    left: 1.5rem;
    top: 1.5rem;
    border-radius: ${theme.border.radius.large};
  `}
`

export const EventDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 17.6rem;
    background-color: ${theme.colors.mediumGray};
    border-radius: 0 0 2rem 2rem;
    padding: 1.5rem;
    font-size: ${theme.font.sizes.medium};
    line-height: 1.5rem;

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
    font-size: ${theme.font.sizes.large};
    width: 100%;
    padding-left: 0.5rem;
    padding-bottom: 1.3rem;
  `}
`

export const IsOnlineContainer = styled.p`
  color: black;
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
    padding-left: 2.45rem;
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
