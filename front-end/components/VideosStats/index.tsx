import Image from 'next/image'
import { useSession } from 'next-auth/client'

import Button from 'components/Button'

import { MdOutlineRemoveRedEye } from 'react-icons/md'

import * as S from './styles'

export type VideoStatsData = {
  title: string
  views: number
  thumbnail: string
}

export type VideoStatsProps = {
  videos: VideoStatsData[]
  title: string
}

const VideosStats = ({ videos, title }: VideoStatsProps) => {
  const [session] = useSession()
  return (
    <S.Wrapper>
      <S.SuperTitle>{title}</S.SuperTitle>
      <S.StatsArea>
        {videos?.map((video, index) => (
          <S.StatsCard key={index}>
            <S.Thumb>
              <Image
                src={video.thumbnail ? video.thumbnail : '/img/no-image.jpg'}
                alt={video.title}
                layout="fill"
                objectFit="cover"
              />
            </S.Thumb>
            <S.Title>{video.title}</S.Title>
            <S.Views>
              <MdOutlineRemoveRedEye size={18} />
              <small>{video.views}</small>
            </S.Views>
          </S.StatsCard>
        ))}
      </S.StatsArea>
      <Button
        minimal
        fullWidth
        size="small"
        as="a"
        href={`/${session?.isAdmin ? 'admin' : 'student'}/video`}
      >
        {session?.isAdmin ? 'Ir aos Vídeos' : 'Ver Meus Vídeos'}
      </Button>
    </S.Wrapper>
  )
}

export default VideosStats
