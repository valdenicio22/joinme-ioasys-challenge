import styled, { css } from 'styled-components'

type WrapperProps = {
  size?: 'small'
}

const wrapperModifiers = {
  size: () => css`
    width: 5rem;
    height: 5rem;
    padding: 1rem;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    width: 8rem;
    height: 8rem;
    padding: 1.5rem;

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
