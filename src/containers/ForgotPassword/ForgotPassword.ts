import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 42rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 4rem 3.2rem;
`

export const ArrowContainer = styled.div`
  width: 100%;
  margin-bottom: 14rem;
  cursor: pointer;
`

export const InfoContainer = styled.div`
  margin-bottom: 4.8rem;
  margin-left: 1rem;
`

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 3.2rem;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
`
export const ErrorMessageContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 2rem;
  color: ${({ theme }) => theme.colors.redError};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`

export const BtnContainer = styled.div`
  margin-top: 14rem;
`
