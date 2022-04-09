import { ReactNode } from 'react'
import Modal from 'react-modal'

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
  /* const ReactModal = async (e: FormEvent) => {
    e.preventDefault()

    await createTransaction({
      title,
      category,
      amount,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onCloseNewTransactionModal()
  }*/

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal react-modal-content"
    >
      {children}
    </Modal>
  )
}
