import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import Logo from 'components/Logo'
import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import { ProfileStudentMenuProps } from 'components/ProfileStudentMenu'

import {
  MdExitToApp,
  MdOutlineBook,
  MdOutlineDashboard,
  MdOutlineFavoriteBorder,
  MdOutlineSlowMotionVideo
} from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'

import * as S from './styles'

const MobileStudentProfileMenu = ({
  name,
  photo,
  point
}: ProfileStudentMenuProps) => {
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
            <small>Estudante</small>
            <br />
            <small>{point} / 1000</small>
            <S.Score>
              <small>Nível 1</small>
            </S.Score>
          </S.UserData>
          <Button
            fullWidth
            size="large"
            as="a"
            href="/student/profile"
            bgColor="white"
            icon={<RiUser3Line size={20} />}
          >
            Perfil
          </Button>
          <Button
            fullWidth
            size="large"
            bgColor="danger"
            icon={<MdExitToApp size={20} />}
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
        <Link href="/student/dashboard" passHref>
          <S.Link className={asPath === '/student/dashboard' ? 'active' : ''}>
            <MdOutlineDashboard size={25} />
          </S.Link>
        </Link>

        <Link href="/student/document" passHref>
          <S.Link className={asPath === '/student/document' ? 'active' : ''}>
            <MdOutlineBook size={25} />
          </S.Link>
        </Link>

        <Link href="/student/video" passHref>
          <S.Link className={asPath === '/student/video' ? 'active' : ''}>
            <MdOutlineSlowMotionVideo size={25} />
          </S.Link>
        </Link>

        <Link href="/student/favorites" passHref>
          <S.Link className={asPath === '/student/favorites' ? 'active' : ''}>
            <MdOutlineFavoriteBorder size={25} />
          </S.Link>
        </Link>

        <Link href="/student/reports" passHref>
          <S.Link className={asPath === '/student/reports' ? 'active' : ''}>
            <TbReportAnalytics size={25} />
          </S.Link>
        </Link>
      </S.FooterMenu>
    </S.Wrapper>
  )
}

export default MobileStudentProfileMenu
