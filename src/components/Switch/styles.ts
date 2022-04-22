import * as SwitchPrimitive from '@radix-ui/react-switch'
import styled, { css } from 'styled-components'

export const Switch = styled(SwitchPrimitive.Root)`
  ${({ theme }) => css`
    all: unset;
    width: 3.6rem;
    height: 2rem;
    background-color: ${theme.colors.secondary};
    border-radius: 9999px;
    position: relative;
    -webkit-tap-highlight-color: #000;

    &[data-state='checked'] {
      background-color: ${theme.colors.primary};
    }
    cursor: pointer;
  `}
`

export const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 1.3rem;
  height: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 9999px;
  box-shadow: 0 2px 2px 0;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`
