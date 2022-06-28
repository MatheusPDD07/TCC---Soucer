import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'

import Modal from 'components/Modal'
import Button from 'components/Button'
import EditVideo from 'components/EditVideo'
import { FormLoading } from 'components/Form'
import { StudentData, TopicData } from 'components/VideoCard'

import { useVideo } from 'hooks/use-video'

import {
  MdClose,
  MdOutlineDelete,
  MdOutlineModeEditOutline
} from 'react-icons/md'

import api from 'service/api'

import * as S from './styles'
import theme from 'styles/theme'

export type VideoCrudCardProps = {
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
  topics: TopicData[]
}

const VideoCrudCard = ({
  id,
  topic,
  title,
  urlVideo,
  star,
  keys,
  views,
  thumbnail,
  topics
}: VideoCrudCardProps) => {
  const router = useRouter()
  const [session] = useSession()
  const { deleteVideo, studentDeleteVideo } = useVideo()
  const [isLoading, setIsLoading] = useState(false)

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)

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

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' &&
        (setDeleteModalIsOpen(false), setUpdateModalIsOpen(false))
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const handleDeleteVideo = async (id: string) => {
    setIsLoading(true)

    if (session?.isAdmin) {
      await deleteVideo(id)
    } else {
      await studentDeleteVideo(id)
    }

    setDeleteModalIsOpen(false)
    router.reload()
    setIsLoading(false)
  }

  return (
    <S.Wrapper>
      {session?.isAdmin ? (
        <S.Cover>
          <Image
            src={thumbnail ? thumbnail : '/img/no-image.jpg'}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </S.Cover>
      ) : (
        <S.Cover role="button" onClick={() => handleOpenVideoPage(id)}>
          <Image
            src={thumbnail ? thumbnail : '/img/no-image.jpg'}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </S.Cover>
      )}

      <S.Content>
        {session?.isAdmin ? (
          <S.Title>{title.trim()}</S.Title>
        ) : (
          <S.Link role="button" onClick={() => handleOpenVideoPage(id)}>
            <S.Title>{title.trim()}</S.Title>
          </S.Link>
        )}

        <S.Stats>
          <S.StatsBox>
            <small>
              {views} Visualizaç{views === 1 ? 'ão' : 'ões'}
            </small>
          </S.StatsBox>
          <S.StatsBox>
            <small>
              {star} Estrela{star !== 1 ? 's' : ''}
            </small>
          </S.StatsBox>
        </S.Stats>

        <S.Actions>
          <Button
            bgColor="darkGray"
            size="small"
            fullWidth
            title="Editar Video"
            icon={<MdOutlineModeEditOutline size={20} />}
            onClick={() => setUpdateModalIsOpen(true)}
          />
          <Button
            bgColor="danger"
            size="small"
            fullWidth
            title="Excluir Video"
            icon={<MdOutlineDelete size={20} />}
            onClick={() => setDeleteModalIsOpen(true)}
          />
        </S.Actions>
      </S.Content>

      <Modal templateIsOpen={updateModalIsOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setUpdateModalIsOpen(false)}
        >
          <MdClose size={40} />
        </S.Close>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>Atualizar Vídeo</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <EditVideo
              topics={topics}
              id={id}
              title={title}
              urlVideo={urlVideo}
              topicId={topic.id}
              keys={keys}
            />
          </S.ModalBody>
        </S.ModalContent>
      </Modal>

      <Modal templateIsOpen={deleteModalIsOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setDeleteModalIsOpen(false)}
        >
          <MdClose size={40} />
        </S.Close>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>Excluir Vídeo</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <p style={{ color: theme.colors.darkGray, textAlign: 'center' }}>
              Tem certeza que deseja deletar o vídeo <strong>{title}</strong>?
              <br />
              Os dados dele não poderão ser recuperados posteriormente.
            </p>
          </S.ModalBody>
          <S.ModalFooter>
            <S.DeleteMessageButtons>
              <Button
                bgColor="darkGray"
                onClick={() => setDeleteModalIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                bgColor="danger"
                onClick={() => handleDeleteVideo(id)}
                disabled={isLoading}
              >
                {isLoading ? <FormLoading /> : <span>Sim, deletar</span>}
              </Button>
            </S.DeleteMessageButtons>
          </S.ModalFooter>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  )
}

export default VideoCrudCard
