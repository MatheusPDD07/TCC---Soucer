import { useState } from 'react'
import { useRouter } from 'next/router'

import { useTopic } from 'hooks/use-topic'

import Modal from 'components/Modal'
import Button from 'components/Button'
import EditTopic from 'components/EditTopic'
import { FormLoading } from 'components/Form'

import {
  MdClose,
  MdOutlineDelete,
  MdOutlineModeEditOutline
} from 'react-icons/md'

import * as S from './styles'
import theme from 'styles/theme'

export type SonsData = {
  title: string
}

type TopicData = {
  id: string
  title: string
}

export type TopicCrudCardProps = {
  id: string
  title: string
  fatherId: string
  description: string
  sons: SonsData[]
  topics: TopicData[]
}

const TopicCrudCard = ({
  id,
  title,
  fatherId,
  description,
  sons,
  topics
}: TopicCrudCardProps) => {
  const router = useRouter()
  const { deleteTopic } = useTopic()
  const [isLoading, setIsLoading] = useState(false)

  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

  const handleDeleteTopic = async (id: string) => {
    setIsLoading(true)
    await deleteTopic(id)
    setIsLoading(false)
    setDeleteModalIsOpen(false)
    router.reload()
  }
  return (
    <S.Wrapper>
      <S.Body>
        <S.Subcategories>{sons.length} subcategorias</S.Subcategories>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Body>
      <S.Footer>
        <Button
          fullWidth
          bgColor="darkGray"
          size="small"
          onClick={() => setUpdateModalIsOpen(true)}
          icon={<MdOutlineModeEditOutline size={20} />}
          title="Editar Categoria"
        />
        <Button
          fullWidth
          bgColor="danger"
          size="small"
          onClick={() => setDeleteModalIsOpen(true)}
          icon={<MdOutlineDelete size={20} />}
          title="Excluir Categoria"
        />
      </S.Footer>

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
            <S.ModalTitle>Alterar Categoria</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <EditTopic
              id={id}
              topics={topics}
              title={title}
              description={description}
              fatherId={fatherId}
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
            <S.ModalTitle>Excluir Categoria</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <p style={{ color: theme.colors.darkGray, textAlign: 'center' }}>
              Tem certeza que deseja deletar a categoria{' '}
              <strong>{title}</strong>?
              <br />
              Os dados dela não poderão ser recuperados posteriormente.
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
                onClick={() => handleDeleteTopic(id)}
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

export default TopicCrudCard
