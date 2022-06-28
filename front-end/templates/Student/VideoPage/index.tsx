import { NextSeo } from 'next-seo'

import VideoInfo from 'components/VideoInfo'
import Breadcrumb from 'components/Breadcrumb'
import StudentInfo from 'components/StudentInfo'
import { StudentData, TopicData } from 'components/VideoCard'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

import { StudentProps } from '../Video'

export type VideoPageData = {
  id: string
  topic: TopicData
  title: string
  urlVideo: string
  star: number
  keys: string
  views: number
  thumbnail: string
  student: StudentData
  isFavorite: boolean
  isStar: boolean
}

export type VideoPageTemplateProps = {
  student: StudentProps
  video: VideoPageData
}

const VideoPageTemplate = ({ student, video }: VideoPageTemplateProps) => {
  const videoId = video.urlVideo.split('v=')[1].split('&')[0]
  return (
    <Base user={student}>
      <NextSeo title={`${video.title} - ${SITE_NAME}`} />

      <Breadcrumb title={video.title} supTitle="Videos" supUrl="/video" />

      <S.Content>
        <S.VideoInfoArea>
          <StudentInfo
            id={video.student.id}
            name={video.student.name}
            lastName={video.student.lastName}
            imageUrl={video.student.imageUrl}
          />
          <VideoInfo
            id={video.id}
            isFavorite={video.isFavorite}
            isStar={video.isStar}
            keys={video.keys}
            star={video.star}
            title={video.title}
            views={video.views}
          />
        </S.VideoInfoArea>
        <S.VideoPlayerArea>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </S.VideoPlayerArea>
      </S.Content>
    </Base>
  )
}

export default VideoPageTemplate
