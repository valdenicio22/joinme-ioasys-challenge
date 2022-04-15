import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 19rem;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.lighterGray};
  color: #000;

  padding: 2.4rem 2rem;
`

export const HeaderContent = styled.div`
  width: 112rem; //1120px
  height: 100%;
  margin: 0 auto;
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
    margin-top: 0.3rem;
  `}
`
export const HostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`
export const FakePersonIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #ccc;
`
export const HostedBy = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
`

export const HostName = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
  `}
`

export const MainInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 2.4rem 2rem;
`

export const EventInfoContainer = styled.div`
  width: 112rem; //1120px
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 66rem 46rem;
`

export const EventInfo = styled.div``

export const Details = styled.div``

export const H2 = styled.h2`
  margin-bottom: 1rem;
`
export const PInfo = styled.p`
  text-align: justify;
  margin-bottom: 1rem;
`

export const SideInfo = styled.div``

export const ScheduleContainer = styled.div`
  width: 35rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ScheduleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 1.5rem;
`

export const ScheduleInfo = styled.p`
  width: 20rem;
`

export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ccc;
`

export const FloatingInfo = styled.div``

export const FooterContainer = styled.footer`
  background-color: #212121;

  width: 100%;
  height: 8rem;
  border: 1px solid #fff;
`
export const FooterContent = styled.div`
  width: 112rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SocialMedia = styled.div``
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const MobileLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
