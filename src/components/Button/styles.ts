import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0.65rem 3rem;
    border-radius: ${theme.border.radius.xlarge};
    font-size: ${theme.font.sizes.medium};
  `}
`
