import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.25rem;
    margin-top: 2.4rem;
    position: absolute;
    right: 0;
    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.secondary};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content} {
      transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
