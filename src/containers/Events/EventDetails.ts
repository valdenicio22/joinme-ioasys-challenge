import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`
export const EventDetailContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
`

export const EventImgContainer = styled.div`
  width: 100%;
  max-height: 46rem;
  height: 100%;

  margin-bottom: 4rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
  & > svg {
    position: absolute;
    right: 3rem;
    bottom: 0;
  }
`
export const MainInfoContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 60rem 52rem;
  grid-template-rows: auto;
  grid-template-areas:
    'eventDetail sideInfo'
    'suggestions suggestions';
`

export const EventInfoContainer = styled.div`
  grid-area: eventDetail;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const EventName = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 3rem;
    padding-bottom: 2rem;
  `}
`

export const EventDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    padding-bottom: 1.5rem;
  `}
`

export const EventAttendeesContainer = styled.div`
  padding-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`

export const Attendees = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
  strong {
    padding-right: 0.5rem;
  }
`

export const EventListInfoContainer = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
`
export const EventInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`

export const Item = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-size: ${({ theme }) => theme.font.weight.bold};
  padding-bottom: 1rem;
`
export const AnswerItem = styled.p``

//side card
export const SideInfo = styled.div`
  grid-area: sideInfo;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const SideCardContainer = styled.div`
  width: 30rem;

  padding: 2rem 3rem;
  border-radius: ${({ theme }) => theme.border.radius.large};
  background-color: ${({ theme }) => theme.colors.mediumGray};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`
export const SideTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const Hoste = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
`
export const NameHoste = styled.p`
  margin-bottom: 0.8rem;
`
export const SideEventInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;
`
export const BoxInfo = styled.div``
export const TypeInfo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
  `}
`
export const InfoData = styled.p`
  padding-bottom: 1.5rem;
`
//{Suggestions Events}

export const EventSuggestionsContainer = styled.div`
  grid-area: suggestions;
`
export const SuggestionsTitle = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 1.5rem 0 1rem;
`
export const SuggestionsEventsList = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

//Floating footer
export const FloatingInfoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.mediumGray};
    border-radius: 1.5rem 1.5rem 0 0;
    margin-top: 3rem;
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
  justify-content: space-between;
  gap: 8rem;

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
export const DateHeader = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
export const DateTimeInfo = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const DateTimeTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.semiBold};
  `}
`

export const AttendEventContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 6rem;

  button {
    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.large};
      border: none;
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    `}
  }
`

export const ShareButton = styled.button`
  border-radius: 50%;
`
