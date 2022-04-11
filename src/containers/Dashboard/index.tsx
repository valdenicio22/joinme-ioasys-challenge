import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import Profile from 'components/Profile'
import { Dialog } from '../../components/Dialog'
import { Interests } from '../../components/Interests'
import { EmergencyContact } from '../../components/EmergencyContact'

import { withSSRAuth } from '../../utils/withSSRAuth'

import * as S from './Dashboard.styles'

import Drawer from 'react-modern-drawer'

export default function Dashboard() {
  const [modalStep, setModalStep] = useState(1)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState)
  }

  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => setIsModalOpen(false)

  return (
    <S.Wrapper>
      <Head>
        <title>Dashboard | joinMe</title>
      </Head>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="react-drawer"
        size={'350px'}
      >
        <Profile />
      </Drawer>

      <Dialog isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
        {modalStep === 1 && <EmergencyContact setModalStep={setModalStep} />}
        {modalStep === 2 && (
          <Interests
            setModalStep={setModalStep}
            onCloseModal={onCloseModal}
            modalStep={modalStep}
          />
        )}
      </Dialog>

      <S.HeaderContainer>
        <S.WelcomeContainer>
          <S.ProfilePicture />
          <S.Welcome>Olá, Luma!</S.Welcome>
        </S.WelcomeContainer>
        <S.SettingsButton onClick={toggleDrawer}>Icon</S.SettingsButton>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
