import styled, { css, DefaultTheme } from 'styled-components'
import { Activity } from '.'

type InterestProps = Pick<Activity, 'isSelect'>

export const ModalContainer = styled.div`
  width: 43rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
`

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.darkPurple};
  margin-left: 1rem;
`

export const ArrowContainer = styled.div`
  margin-left: 1rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
`

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
`

export const InterestsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 2rem;
  margin-top: 3rem;
  cursor: pointer;
`

const IconContentModifiers = {
  isSelect: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.primary};
  `
}

export const InterestContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const InterestIcon = styled.div<InterestProps>`
  ${({ theme, isSelect }) => css`
    background-color: #ccc;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
    ${isSelect && IconContentModifiers.isSelect(theme)}
  `}
`

export const Interest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InterestFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SkipStep = styled.span`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
export const Wrapper = styled.div`
  width: 76.8rem;
  margin: 0 auto;
  padding: 7rem 3rem;
  border: 2px solid black;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  border: 1px solid black;
`

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfilePicture = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1.5rem;
`

export const Welcome = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const SettingsButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #ccc;
`
