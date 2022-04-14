import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ArrowContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  cursor: pointer;
`

export const IconLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`

export const InfoContainer = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin-bottom: 3rem;
`
export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-bottom: 1.5rem;
`
export const PInfo = styled.p``

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
`

export const BtnAndLastInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 10rem;
`

export const PInfoAccount = styled.p``

export const YourAccount = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`
