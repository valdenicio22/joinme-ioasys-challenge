import styled from 'styled-components'

export const Wrapper = styled.div``

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`

export const Input = styled.input`
  height: 5.9rem;
  width: 35rem;
  padding: 1.8rem 1.5rem;
  border-radius: 0.3rem;
  margin-top: 0.8rem;
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  border: 0.2rem solid #cccccc;
`

export const Label = styled.label`
  margin-left: 1rem;
`
