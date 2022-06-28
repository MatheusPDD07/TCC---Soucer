import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import * as S from './styles'

import { BiCategory } from 'react-icons/bi'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

import api from 'service/api'
import Image from 'next/image'

export type TopicData = {
  id: string
  title: string
}

export type StudentData = {
  id?: string
  name: string
  lastName: string
  imageUrl: string
  userName?: string
  email?: string
}

export type VideoCardProps = {
  id: string
  topic?: TopicData
  title: string
  views: number
  thumbnail: string
  student: StudentData
}

const VideoCard = ({
  id,
  topic,
  title,
  views,
  thumbnail,
  student
}: VideoCardProps) => {
  const router = useRouter()
  const [session] = useSession()

  const handleOpenVideoPage = async (videoId: string) => {
    await api
      .post(
        '/video/updateViews',
        { videoId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.jwt}`
          }
        }
      )
      .then(function (response) {
        if (response) {
          router.push(`/student/video/${videoId}`)
        }
      })
  }

  return (
    <S.Wrapper>
      <S.Cover role="button" onClick={() => handleOpenVideoPage(id)}>
        <Image
          src={thumbnail ? thumbnail : '/img/no-image.jpg'}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </S.Cover>
      <S.Content>
        <S.Link role="button" onClick={() => handleOpenVideoPage(id)}>
          <S.Title>{title.trim()}</S.Title>
        </S.Link>
        {student && (
          <Link href={`/student/user/${student.id}`} passHref>
            <S.Student title="Estudante">
              <S.Photo>
                <Image
                  src={
                    student.imageUrl
                      ? student.imageUrl
                      : '/img/default-image.png'
                  }
                  alt={`${student.name} ${student.lastName}`}
                  layout="fill"
                  objectFit="cover"
                />
              </S.Photo>
              <small>{`${student.name} ${student.lastName}`}</small>
            </S.Student>
          </Link>
        )}
        <S.Data>
          <S.Views>
            <MdOutlineRemoveRedEye size={18} />
            {`${views} Visualizaç${views === 1 ? 'ão' : 'ões'}`}
          </S.Views>
          {topic && (
            <>
              |
              <Link href={`/student/topic/${topic.id}`} passHref>
                <S.Topic title="Categoria">
                  <BiCategory size={18} />
                  {topic.title}
                </S.Topic>
              </Link>
            </>
          )}
        </S.Data>
      </S.Content>
    </S.Wrapper>
  )
}

export default VideoCard
