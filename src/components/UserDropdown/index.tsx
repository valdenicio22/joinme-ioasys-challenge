import { useState } from 'react'
import Link from 'next/link'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown, HelpCircle } from '@styled-icons/boxicons-regular'

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
        <Link href="#" passHref>
          <S.Link title="Wishlist">
            <FavoriteBorder />
            <span>Meus Eventos</span>
          </S.Link>
        </Link>
        <Link href="#" passHref>
          <S.Link title="Ajuda">
            <HelpCircle />
            <span>Ajuda</span>
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
