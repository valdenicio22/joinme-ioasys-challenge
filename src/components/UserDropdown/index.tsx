import { useState } from 'react'
import Link from 'next/link'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular'
import { Create } from '@styled-icons/ionicons-outline'
import { Bookmark } from '@styled-icons/bootstrap'

import Dropdown from 'components/Dropdown'

import * as S from './styles'
import { useAuth } from 'context/AuthContext'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  const [isDropdrowOpen, setIsDropdrowOpen] = useState(false)
  const { signOut } = useAuth()

  const handleIsDropdownOpen = () => setIsDropdrowOpen(!isDropdrowOpen)

  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
      isDropdrowOpen={isDropdrowOpen}
      handleIsDropdownOpen={handleIsDropdownOpen}
    >
      <S.Nav>
        <Link href="/profile/editprofile" passHref>
          <S.Link title="EditProfile" onClick={handleIsDropdownOpen}>
            <AccountCircle />
            <span>Editar Perfil</span>
          </S.Link>
        </Link>
        <Link href="/profile/savedevents" passHref>
          <S.Link title="Eventos Salvos" onClick={handleIsDropdownOpen}>
            <Bookmark />
            <span>Eventos Salvos</span>
          </S.Link>
        </Link>
        <Link href="/profile/myevents" passHref>
          <S.Link title="Meus Eventos" onClick={handleIsDropdownOpen}>
            <Create />
            <span>Meus Eventos</span>
          </S.Link>
        </Link>
        <Link href="#" passHref>
          <S.Link title="Sign out" onClick={signOut}>
            <ExitToApp />
            <span>Sign out</span>
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  )
}
export default UserDropdown
