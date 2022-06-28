import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import Logo from 'components/Logo'
import Button from 'components/Button'

import {
  MdOutlineSlowMotionVideo,
  MdExitToApp,
  MdOutlineListAlt,
  MdOutlineDashboard,
  MdOutlineBook
} from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'

export type ProfileAdminMenuProps = {
  photo: string
  name: string
}

import * as S from './styles'

const ProfileAdminMenu = ({ photo, name }: ProfileAdminMenuProps) => {
  const { push, asPath } = useRouter()

  return (
    <S.Wrapper>
      <Logo color="white" hideOnMobile size="large" />

      <S.ScoreArea>
        <S.ImageBox>
          <Image
            src={photo ? photo : '/img/default-image.png'}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </S.ImageBox>
        <S.Points>
          <S.Name>{name}</S.Name>
        </S.Points>
      </S.ScoreArea>

      <S.Menu>
        <Link href="/admin/dashboard" passHref>
          <S.Link className={asPath === '/admin/dashboard' ? 'active' : ''}>
            <MdOutlineDashboard size={25} /> <span>Dashboard</span>
          </S.Link>
        </Link>

        <Link href="/admin/student" passHref>
          <S.Link className={asPath === '/admin/student' ? 'active' : ''}>
            <RiUser3Line size={25} /> <span>Estudantes</span>
          </S.Link>
        </Link>

        <Link href="/admin/topics" passHref>
          <S.Link className={asPath === '/admin/topics' ? 'active' : ''}>
            <MdOutlineListAlt size={25} /> <span>Categorias</span>
          </S.Link>
        </Link>

        <Link href="/admin/document" passHref>
          <S.Link className={asPath === '/admin/document' ? 'active' : ''}>
            <MdOutlineBook size={25} /> <span>Documentos</span>
          </S.Link>
        </Link>

        <Link href="/admin/video" passHref>
          <S.Link className={asPath === '/admin/video' ? 'active' : ''}>
            <MdOutlineSlowMotionVideo size={25} /> <span>Vídeos</span>
          </S.Link>
        </Link>

        <Link href="/admin/reports" passHref>
          <S.Link className={asPath === '/admin/reports' ? 'active' : ''}>
            <TbReportAnalytics size={25} /> <span>Relatórios</span>
          </S.Link>
        </Link>
      </S.Menu>

      <Button
        fullWidth
        size="large"
        bgColor="white"
        icon={<MdExitToApp size={25} />}
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
      >
        Sair
      </Button>
    </S.Wrapper>
  )
}

export default ProfileAdminMenu
