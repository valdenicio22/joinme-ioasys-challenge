import { Dispatch, SetStateAction, useState } from 'react'
import { Signin } from 'components/Signin'
import { Dialog } from 'components/Dialog'
import { ForgotPassword } from 'components/ForgotPassword'
import { Signup } from 'components/Signup'
import { CurrentModal } from 'types/types'
import { SuccessSignup } from 'components/SuccessSignup'

type UseDialogProps = {
  currentModal: CurrentModal
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

export const UserDialog = ({
  currentModal,
  setCurrentModal
}: UseDialogProps) => {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(
    currentModal === 'signin'
  )
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(
    currentModal === 'signup'
  )
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(
    currentModal === 'forgotPassword'
  )
  const [isSuccessSignupModalOpen, setIsSuccessSignupModalOpen] = useState(
    currentModal === 'successSignup'
  )

  const handleCloseModalSignin = () => {
    setIsSigninModalOpen(false)
    setCurrentModal('idle')
  }
  const handleCloseModalSignup = () => {
    setIsSignupModalOpen(false)
    setCurrentModal('idle')
  }
  const handleCloseModalForgotPassword = () => {
    setIsForgotPasswordModalOpen(false)
    setCurrentModal('idle')
  }
  const handleCloseModalSuccessSignup = () => {
    setIsSuccessSignupModalOpen(false)
    setCurrentModal('idle')
  }

  return (
    <>
      {
        <Dialog
          isModalOpen={isSigninModalOpen}
          onCloseModal={() => handleCloseModalSignin()}
        >
          <Signin setCurrentModal={setCurrentModal} />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isForgotPasswordModalOpen}
          onCloseModal={() => handleCloseModalForgotPassword()}
        >
          <ForgotPassword setCurrentModal={setCurrentModal} />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isSignupModalOpen}
          onCloseModal={() => handleCloseModalSignup()}
        >
          <Signup setCurrentModal={setCurrentModal} />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isSuccessSignupModalOpen}
          onCloseModal={() => handleCloseModalSuccessSignup()}
        >
          <SuccessSignup setCurrentModal={setCurrentModal} />
        </Dialog>
      }
    </>
  )
}
