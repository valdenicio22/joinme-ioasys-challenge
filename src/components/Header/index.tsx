import Logo from '../Logo'
import Router from 'next/router'
import * as S from './styles'
import { useState } from 'react'
import { Dialog } from 'components/Dialog'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Wrapper>
      <Dialog isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
      <S.LogoBtnContainer onClick={() => Router.push('/')}>
        <Logo color="black" />
      </S.LogoBtnContainer>
      <S.NavContainer>
        <S.NavButton onClick={() => setIsModalOpen(true)}>Entrar</S.NavButton>
        <S.NavButton onClick={() => setIsModalOpen(true)}>
          Cadastra-se
        </S.NavButton>
      </S.NavContainer>
    </S.Wrapper>
  )
}

export default Header
