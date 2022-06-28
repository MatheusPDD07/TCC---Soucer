import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import Logo from 'components/Logo'
import Button from 'components/Button'

import {
  MdExitToApp,
  MdOutlineBook,
  MdOutlineDashboard,
  MdOutlineFavoriteBorder,
  MdOutlineSlowMotionVideo
} from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'

export type ProfileStudentMenuProps = {
  photo: string
  name: string
  point: number
}

import * as S from './styles'
import { StudentLevel } from 'utils/countStudentPoints'

const ProfileStudentMenu = ({
  photo,
  name,
  point
}: ProfileStudentMenuProps) => {
  const { push, asPath } = useRouter()
  const { goal, level } = StudentLevel(point)

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

          <S.ScoreData>
            Pontos: {point} / <S.Span>{goal}</S.Span>
          </S.ScoreData>

          <S.Level>Nível {level}</S.Level>
        </S.Points>
      </S.ScoreArea>

      <S.Menu>
        <Link href="/student/dashboard" passHref>
          <S.Link className={asPath === '/student/dashboard' ? 'active' : ''}>
            <MdOutlineDashboard size={25} /> <span>Painel de Controle</span>
          </S.Link>
        </Link>

        <Link href="/student/document" passHref>
          <S.Link className={asPath === '/student/document' ? 'active' : ''}>
            <MdOutlineBook size={25} /> <span>Documentos</span>
          </S.Link>
        </Link>

        <Link href="/student/video" passHref>
          <S.Link className={asPath === '/student/video' ? 'active' : ''}>
            <MdOutlineSlowMotionVideo size={25} /> <span>Vídeos</span>
          </S.Link>
        </Link>

        <Link href="/student/favorites" passHref>
          <S.Link className={asPath === '/student/favorites' ? 'active' : ''}>
            <MdOutlineFavoriteBorder size={25} /> <span>Favoritos</span>
          </S.Link>
        </Link>

        <Link href="/student/reports" passHref>
          <S.Link className={asPath === '/student/reports' ? 'active' : ''}>
            <TbReportAnalytics size={25} /> <span>Relatórios</span>
          </S.Link>
        </Link>

        <Link href="/student/profile" passHref>
          <S.Link className={asPath === '/student/profile' ? 'active' : ''}>
            <RiUser3Line size={25} /> <span>Perfil</span>
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

export default ProfileStudentMenu
