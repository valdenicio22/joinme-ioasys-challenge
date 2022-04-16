import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f6f7f8;
`
export const DesktopContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
`

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
`

export const DateHeader = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`
export const EventTitle = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
    padding-top: 0.3rem;
    padding-bottom: 1rem;
  `}
`

export const MainInfoContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 66rem 46rem;
`

export const EventInfoContainer = styled.div``
export const EventImgContainer = styled.div`
  width: 100%;
  max-height: 37rem;
  margin-bottom: 2.2rem;

  img {
    border-radius: 1rem;
  }
`

export const EventDetailsContainer = styled.ul`
  list-style: none;
  margin-bottom: 0.7rem;
`
export const SubTitle = styled.h3`
  padding-bottom: 2rem;
`
export const EventDetailsItem = styled.li`
  padding-bottom: 1.5rem;
`
export const EventDetailsIcon = styled.span`
  padding-right: 1rem;
`

export const DescriptionContainer = styled.div`
  margin-bottom: 2rem;
`

export const PDetails = styled.p`
  text-align: justify;

  & + p {
    margin-bottom: 1.5rem;
  }
`

export const SideInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SideCardContainer = styled.div`
  width: 35rem;

  padding: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.3);
`
export const Hoste = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-bottom: 1.5rem;
`
export const ImgHoste = styled.div``
export const NameAndMedia = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`
export const NameHoste = styled.p`
  margin-bottom: 0.8rem;
`
export const MediaHoste = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const AboutHoste = styled.p``

export const FloatingInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: 1.5rem 1.5rem 0 0;
  `}
`

export const ScheduleContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    margin: 0 auto;
    width: 100%;

    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  width: fit-content;
`

export const DateTime = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`

export const DateTimeTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.semiBold};
  `}
`
export const DateTimeInfo = styled.strong`
  font-size: ${({ theme }) => theme.font.sizes.large};
`
export const AttendEventContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4rem;
`
export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
`
export const PriceTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const PriceValue = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
  `}
`

export const SaveEvent = styled.button`
  background: transparent;
  outline: none;
  border: none;
`
