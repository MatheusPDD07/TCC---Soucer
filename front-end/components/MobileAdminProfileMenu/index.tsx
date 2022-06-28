import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import Logo from 'components/Logo'
import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import { ProfileAdminMenuProps } from 'components/ProfileAdminMenu'

import * as S from './styles'

import {
  MdExitToApp,
  MdOutlineBook,
  MdOutlineDashboard,
  MdOutlineListAlt,
  MdOutlineSlowMotionVideo
} from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'

const MobileAdminProfileMenu = ({ name, photo }: ProfileAdminMenuProps) => {
  const { push, asPath } = useRouter()

  return (
    <S.Wrapper>
      <S.TopMenu>
        <Logo color="color" hideOnMobile size="large" />
        <Dropdown
          title={
            <S.ImageBox>
              <Image
                src={photo ? photo : '/img/default-image.png'}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </S.ImageBox>
          }
        >
          <S.UserData>
            <S.Name>{name}</S.Name>
            <small>Administrador</small>
          </S.UserData>
          <Button
            fullWidth
            size="large"
            bgColor="danger"
            icon={<MdExitToApp size={25} />}
            onClick={async () => {
              const data = await signOut({ redirect: false, callbackUrl: '/' })
              push(data.url)
            }}
          >
            Sair
          </Button>
        </Dropdown>
      </S.TopMenu>
      <S.FooterMenu>
        <Link href="/admin/dashboard" passHref>
          <S.Link className={asPath === '/admin/dashboard' ? 'active' : ''}>
            <MdOutlineDashboard size={25} />
          </S.Link>
        </Link>

        <Link href="/admin/student" passHref>
          <S.Link className={asPath === '/admin/student' ? 'active' : ''}>
            <RiUser3Line size={25} />
          </S.Link>
        </Link>

        <Link href="/admin/topics" passHref>
          <S.Link className={asPath === '/admin/topics' ? 'active' : ''}>
            <MdOutlineListAlt size={25} />
          </S.Link>
        </Link>

        <Link href="/admin/document" passHref>
          <S.Link className={asPath === '/admin/document' ? 'active' : ''}>
            <MdOutlineBook size={25} />
          </S.Link>
        </Link>

        <Link href="/admin/video" passHref>
          <S.Link className={asPath === '/admin/video' ? 'active' : ''}>
            <MdOutlineSlowMotionVideo size={25} />
          </S.Link>
        </Link>

        <Link href="/admin/reports" passHref>
          <S.Link className={asPath === '/admin/reports' ? 'active' : ''}>
            <TbReportAnalytics size={25} />
          </S.Link>
        </Link>
      </S.FooterMenu>
    </S.Wrapper>
  )
}

export default MobileAdminProfileMenu
