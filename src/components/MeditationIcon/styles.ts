import styled, { css } from 'styled-components'

type WrapperProps = {
  size?: 'small'
}

const wrapperModifiers = {
  size: () => css`
    width: 3rem;
    height: 3rem;
    padding: 0.6rem;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    width: 5.5rem;
    height: 5.5rem;
    padding: 1.2rem;

    border-radius: 50%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.lighterGray};
    ${!!size && wrapperModifiers.size()}
  `}

  > svg {
    width: 100%;
    height: 100%;
  }
`
