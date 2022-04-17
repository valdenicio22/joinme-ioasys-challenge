import { Dispatch, SetStateAction, useState } from 'react'
import { Signin } from 'components/Signin'
import { Dialog } from 'components/Dialog'
import { ForgotPassword } from 'components/ForgotPassword'
import { Signup } from 'components/Signup'
import { CurrentModal } from 'types/types'

type UseDialogProps = {
  currentModal: 'signin' | 'signup' | 'forgotPassword' | 'idle'
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

  return (
    <>
      {
        <Dialog
          isModalOpen={isSigninModalOpen}
          onCloseModal={() => handleCloseModalSignin()}
        >
          <Signin
            setIsSigninModalOpen={setIsSigninModalOpen}
            setIsSignupModalOpen={setIsSignupModalOpen}
            setIsForgotPasswordModalOpen={setIsForgotPasswordModalOpen}
          />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isForgotPasswordModalOpen}
          onCloseModal={() => handleCloseModalForgotPassword()}
        >
          <ForgotPassword
            setIsForgotPasswordModalOpen={setIsForgotPasswordModalOpen}
            setIsSigninModalOpen={setIsSigninModalOpen}
          />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isSignupModalOpen}
          onCloseModal={() => handleCloseModalSignup()}
        >
          <Signup
            setIsSignupModalOpen={setIsSignupModalOpen}
            setIsSigninModalOpen={setIsSigninModalOpen}
          />
        </Dialog>
      }
    </>
  )
}
