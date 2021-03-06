import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 2rem auto;
  `}
`

export const LogoAndName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PersonName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 3rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  `}
`

export const AccountInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SmallInfoCard = styled.div`
  width: 10rem;
  height: 8rem;
  background-color: #dedaf0;
  color: #4c33fd;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  flex-direction: column;

  span {
    color: #757678;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
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

export const TextFieldsContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  & > div {
    margin-bottom: 1.5rem;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const InterestsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`

export const Interests = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`
