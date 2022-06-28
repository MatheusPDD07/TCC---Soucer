import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import Dropdown from 'components/Dropdown'

import {
  MdOutlineAccountCircle,
  MdExitToApp,
  MdOutlineKeyboardArrowDown,
  MdOutlineDashboard,
  MdOutlineFavoriteBorder
} from 'react-icons/md'

import * as S from './styles'
import { RiUser3Line } from 'react-icons/ri'

export type UserDropdownProps = {
  username: string
  isAdmin?: boolean
}

const UserDropdown = ({ username, isAdmin }: UserDropdownProps) => {
  const { push } = useRouter()
  return (
    <Dropdown
      title={
        <S.Username>
          <MdOutlineAccountCircle size={24} />
          {username}
          <MdOutlineKeyboardArrowDown size={24} />
        </S.Username>
      }
    >
      <S.Nav>
        <Link href={`/${isAdmin ? 'admin' : 'student'}/dashboard`} passHref>
          <S.Link title="painel de controle">
            <MdOutlineDashboard size={24} />
            <span>Painel de Controle</span>
          </S.Link>
        </Link>
        {!isAdmin && (
          <>
            <Link href={'student/favorites'} passHref>
              <S.Link title="favoritos">
                <MdOutlineFavoriteBorder size={24} />
                <span>Favoritos</span>
              </S.Link>
            </Link>
            <Link href={'student/profile'} passHref>
              <S.Link title="perfil">
                <RiUser3Line size={24} />
                <span>Perfil</span>
              </S.Link>
            </Link>
          </>
        )}

        <S.Link
          role="button"
          title="Sair"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' })
            push(data.url)
          }}
        >
          <MdExitToApp size={24} />
          <span>Sair</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
