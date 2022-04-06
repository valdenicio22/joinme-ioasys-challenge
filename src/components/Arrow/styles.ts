import styled, { css } from 'styled-components'
import { ArrowProps } from '.'

export const Wrapper = styled.div<ArrowProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
