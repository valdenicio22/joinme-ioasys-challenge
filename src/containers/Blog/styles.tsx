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
export const BlogCard = styled.div`
  width: 36rem;
  height: 40.8rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.mediumGray};
    border-radius: ${theme.border.radius.large};
  `}
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 30.05rem;
`
export const InfoContainer = styled.div`
  width: 100%;
  padding: 1.5rem 2.5rem;
  color: ${({ theme }) => theme.colors.black};
`
export const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding-bottom: 1.2rem;
`
export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.large};
`
