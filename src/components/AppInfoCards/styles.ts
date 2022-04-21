import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    height: 38rem;
    padding: 4.5rem 3rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    border-radius: ${theme.border.radius.large};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  `}
`

export const CardTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.large};
    padding: 4rem 0 3rem;
  `}
`

export const CardDescription = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: justify;
  `}
`
