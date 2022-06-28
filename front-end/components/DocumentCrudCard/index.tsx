import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import {
  MdClose,
  MdFileDownload,
  MdOutlineDelete,
  MdOutlineModeEditOutline,
  MdOutlineRemoveRedEye,
  MdOutlineStarBorderPurple500
} from 'react-icons/md'
import { VscFilePdf } from 'react-icons/vsc'

import Modal from 'components/Modal'
import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import EditDocument from 'components/EditDocument'

import * as S from './styles'
import theme from 'styles/theme'

import api from 'service/api'
import { useDoc } from 'hooks/use-docs'

type TopicData = {
  id: string
  title: string
}

export type DocumentCrudCardProps = {
  id: string
  title: string
  urlDocument: string
  topicId: string
  stars: number
  keys: string
  views: number
  student?: {
    id: string
    name: string
    lastName: string
    imageUrl: string
  }
  topics: TopicData[]
}

const DocumentCrudCard = ({
  id,
  title,
  urlDocument,
  topicId,
  stars,
  keys,
  views,
  student,
  topics
}: DocumentCrudCardProps) => {
  const router = useRouter()
  const [session] = useSession()
  const { deleteDoc, studentDeleteDoc } = useDoc()
  const [isLoading, setIsLoading] = useState(false)

  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

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

  const handleDeleteDoc = async (id: string) => {
    setIsLoading(true)

    if (session?.isAdmin) {
      await deleteDoc(id)
    } else {
      await studentDeleteDoc(id)
    }

    setIsLoading(false)
    setDeleteModalIsOpen(false)
    router.reload()
  }

  return (
    <S.Wrapper>
      <S.FileThumbnail>
        <VscFilePdf />
      </S.FileThumbnail>
      <S.TitleArea>
        {session?.isAdmin ? (
          <h3>{title}</h3>
        ) : (
          <S.Link role="button" onClick={() => handleOpenDocumentPage(id)}>
            <S.Title>{title.trim()}</S.Title>
          </S.Link>
        )}
      </S.TitleArea>
      <S.Keys>
        <small>{`#${keys.split('; ').join(' #').replace(';', '')}`}</small>
      </S.Keys>
      <S.Footer>
        <>
          {!session?.isAdmin && student && (
            <Link href={`/student/student/${student.id}`} passHref>
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
        </>
      </S.Footer>
      <S.Buttons>
        <Button
          fullWidth
          as="a"
          href={urlDocument}
          target="_blank"
          minimal
          size="small"
          icon={<MdFileDownload size={20} />}
          title="Baixar Documento"
        />
        <Button
          fullWidth
          onClick={() => setUpdateModalIsOpen(true)}
          bgColor="darkGray"
          size="small"
          icon={<MdOutlineModeEditOutline size={20} />}
          title="Editar Documento"
        />
        <Button
          fullWidth
          onClick={() => setDeleteModalIsOpen(true)}
          bgColor="danger"
          size="small"
          icon={<MdOutlineDelete size={20} />}
          title="Excluir Documento"
        />
      </S.Buttons>

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
            <S.ModalTitle>Editar Documento</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <EditDocument
              topics={topics}
              id={id}
              keys={keys}
              title={title}
              topicId={topicId}
              urlDocument={urlDocument}
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
            <S.ModalTitle>Excluir Documento</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <p style={{ color: theme.colors.darkGray, textAlign: 'center' }}>
              Tem certeza que deseja deletar o documento{' '}
              <strong>{title}</strong>?
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
                onClick={() => handleDeleteDoc(id)}
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

export default DocumentCrudCard
