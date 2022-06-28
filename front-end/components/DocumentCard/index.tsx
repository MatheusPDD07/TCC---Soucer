import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import Button from 'components/Button'

import {
  MdOutlineRemoveRedEye,
  MdOutlineStarBorderPurple500
} from 'react-icons/md'
import { VscFilePdf } from 'react-icons/vsc'

import api from 'service/api'

import * as S from './styles'

export type DocumentCardProps = {
  id: string
  title: string
  stars: number
  keys: string
  views: number
  topic?: {
    id: string
    title: string
  }
  student?: {
    id: string
    name: string
    lastName: string
    imageUrl: string
  }
}

const DocumentCard = ({
  id,
  title,
  stars,
  keys,
  views,
  topic,
  student
}: DocumentCardProps) => {
  const router = useRouter()
  const [session] = useSession()

  const handleOpenDocumentPage = async (documentId: string) => {
    await api
      .post(
        '/document/updateViews',
        { documentId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.jwt}`
          }
        }
      )
      .then(function (response) {
        if (response) {
          router.push(`/student/document/${documentId}`)
        }
      })
  }
  return (
    <S.Wrapper>
      <S.FileThumbnail>
        <VscFilePdf />
      </S.FileThumbnail>
      <S.TitleArea>
        <S.Link role="button" onClick={() => handleOpenDocumentPage(id)}>
          <S.Title>{title.trim()}</S.Title>
        </S.Link>
        {topic && (
          <Link href={`/student/topic/${topic.id}`} passHref>
            <S.Topic title="Categoria">
              <small>{topic.title}</small>
            </S.Topic>
          </Link>
        )}
      </S.TitleArea>
      <S.Keys>
        <small>{`#${keys.split('; ').join(' #').replace(';', '')}`}</small>
      </S.Keys>
      <S.Footer>
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
        <S.Stats>
          <S.StatsBox>
            <MdOutlineRemoveRedEye size={18} /> <small>{views}</small>
          </S.StatsBox>
          <S.StatsBox>
            <MdOutlineStarBorderPurple500 size={20} />
            <small>{stars}</small>
          </S.StatsBox>
        </S.Stats>
      </S.Footer>
      <Button fullWidth onClick={() => handleOpenDocumentPage(id)}>
        Visualizar
      </Button>
    </S.Wrapper>
  )
}

export default DocumentCard
