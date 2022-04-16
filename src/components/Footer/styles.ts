import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  margin-top: auto;
  padding: 1.5rem;
`
export const FotterContent = styled.div`
  max-width: ${({ theme }) => theme.containers.desktop};
  width: 100%;
  margin: 0 auto;
`

export const OutsideConnections = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const SocialMediasContainer = styled.div``

export const FollowUs = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
`

export const MobileButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 0.3rem;

  color: ${({ theme }) => theme.colors.textGray};
`

export const ButtonsLabel = styled.span`
  color: ${({ theme }) => theme.colors.textGray};
`

export const MobileButton = styled.button`
  width: 7rem;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: #000;
  text-align: center;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.textGray};
  color: ${({ theme }) => theme.colors.textGray};
`

export const BottomInfo = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`
export const BottomLink = styled.li`
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
