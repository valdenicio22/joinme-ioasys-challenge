import styled, { css } from 'styled-components'

export const BlogCard = styled.div`
  width: 36rem;
  height: 40.8rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.mediumGray};
    border-radius: ${theme.border.radius.large};
  `}
`

export const ImgContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30.05rem;

    img {
      border-radius: ${theme.border.radius.large} ${theme.border.radius.large} 0
        0;
    }
  `}
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
