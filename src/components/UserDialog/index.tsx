import { Dispatch, SetStateAction, useState } from 'react'
import { Signin } from 'components/Signin'
import { Dialog } from 'components/Dialog'
import { ForgotPassword } from 'components/ForgotPassword'
import { Signup } from 'components/Signup'
import { CurrentModal } from 'types/types'
import { SuccessSignup } from 'components/SuccessSignup'
import { SuccessResetPassword } from 'components/SuccessResetPassword'
import { EmergencyContact } from 'components/EmergencyContact'
import { Interests } from 'components/Interests'
import { Disabilities } from 'components/Disabilities'

type UseDialogProps = {
  currentModal: CurrentModal
  setCurrentModal: Dispatch<SetStateAction<CurrentModal>>
}

export const UserDialog = ({
  currentModal,
  setCurrentModal
}: UseDialogProps) => {
  // remmeber to refact using useReducer
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
  const [isSuccessResetPasswordModalOpen, setIsSuccessResetPasswordModalOpen] =
    useState(currentModal === 'successResetPassword')

  const [isEmergencyContactModalOpen, setEmergencyContactModalOpen] = useState(
    currentModal === 'emergencyContact'
  )
  const [isInterestsModalOpen, setInterestsModalOpen] = useState(
    currentModal === 'interests'
  )
  const [isDisabilitiesModalOpen, setDisabilitiesModalOpen] = useState(
    currentModal === 'disabilities'
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
  const handleCloseModalSuccessResetPassword = () => {
    setIsSuccessResetPasswordModalOpen(false)
    setCurrentModal('idle')
  }
  const handleCloseEmergencyContact = () => {
    setEmergencyContactModalOpen(false)
    setCurrentModal('idle')
  }
  const handleCloseInterests = () => {
    setInterestsModalOpen(false)
    setCurrentModal('idle')
  }
  const handleCloseDisabilities = () => {
    setDisabilitiesModalOpen(false)
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
      {
        <Dialog
          isModalOpen={isSuccessResetPasswordModalOpen}
          onCloseModal={() => handleCloseModalSuccessResetPassword()}
        >
          <SuccessResetPassword setCurrentModal={setCurrentModal} />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isEmergencyContactModalOpen}
          onCloseModal={() => handleCloseEmergencyContact()}
        >
          <EmergencyContact setCurrentModal={setCurrentModal} />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isInterestsModalOpen}
          onCloseModal={() => handleCloseInterests()}
        >
          <Interests setCurrentModal={setCurrentModal} />
        </Dialog>
      }
      {
        <Dialog
          isModalOpen={isDisabilitiesModalOpen}
          onCloseModal={() => handleCloseDisabilities()}
        >
          <Disabilities setCurrentModal={setCurrentModal} />
        </Dialog>
      }
    </>
  )
}
