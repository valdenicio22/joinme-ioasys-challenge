import { ReactNode } from 'react'
import Modal from 'react-modal'
import * as S from './styles'

Modal.setAppElement('#modal-root')

type ReactModalProps = {
  isModalOpen: boolean
  onCloseModal: () => void
  children?: ReactNode
}

export const Dialog = ({
  isModalOpen,
  onCloseModal,
  children
}: ReactModalProps) => {
  return (
    <S.StyledModal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {children}
    </S.StyledModal>
  )
}
