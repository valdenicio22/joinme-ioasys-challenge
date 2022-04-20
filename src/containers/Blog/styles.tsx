import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const BlogContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.desktop};
    margin 0 auto;
  `}
`
export const Welcome = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.bold};
    padding: 2.5rem 0;
  `}
`
