import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Modal from 'components/Modal'
import Button from 'components/Button'
import { FormLoading } from 'components/Form'

import { useStudent } from 'hooks/use-student'

import {
  MdClose,
  MdOutlineDelete,
  MdOutlineLock,
  MdOutlineLockOpen
} from 'react-icons/md'

import * as S from './styles'
import theme from 'styles/theme'

export type StudentCrudCardProps = {
  id: string
  photo: string
  fullName: string
  userName: string
  email: string
  points: number
  isBlocked: boolean
}

const StudentCrudCard = ({
  id,
  photo,
  fullName,
  userName,
  email,
  points,
  isBlocked
}: StudentCrudCardProps) => {
  const router = useRouter()
  const { deleteStudent, unlockStudent, blockStudent } = useStudent()
  const [isLoading, setIsLoading] = useState(false)

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

  const handleDeleteStudent = async (id: string) => {
    setIsLoading(true)
    await deleteStudent(id)
    setIsLoading(false)
    setDeleteModalIsOpen(false)
    router.reload()
  }

  const handleUnlockStudent = async (id: string) => {
    setIsLoading(true)
    await unlockStudent(id)
    setIsLoading(false)
    router.reload()
  }

  const handleBlockStudent = async (id: string) => {
    setIsLoading(true)
    await blockStudent(id)
    setIsLoading(false)
    router.reload()
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Status
          isBlocked={isBlocked}
          title={isBlocked ? 'Usuário Bloqueado' : 'Usuário Ativo'}
        />
        <S.PhotoBox>
          <Image
            src={photo ? photo : '/img/default-image.png'}
            alt={fullName}
            layout="fill"
            objectFit="cover"
          />
        </S.PhotoBox>
        <S.Points>
          <small>
            {points} ponto{points === 1 ? '' : 's'}
          </small>
        </S.Points>
      </S.Header>
      <S.Body>
        <S.Name>{fullName}</S.Name>
        <S.UserName>@{userName}</S.UserName>
        <S.Email>{email}</S.Email>
      </S.Body>
      <S.Footer>
        {isBlocked ? (
          <Button
            onClick={() => handleUnlockStudent(id)}
            bgColor="darkGray"
            icon={<MdOutlineLockOpen size={20} />}
            size="small"
            fullWidth
          >
            Desbloquear
          </Button>
        ) : (
          <Button
            onClick={() => handleBlockStudent(id)}
            bgColor="darkGray"
            icon={<MdOutlineLock size={20} />}
            size="small"
            fullWidth
          >
            Bloquear
          </Button>
        )}
        <Button
          onClick={() => setDeleteModalIsOpen(true)}
          bgColor="danger"
          icon={<MdOutlineDelete size={20} />}
          size="small"
          fullWidth
        >
          Excluir
        </Button>
      </S.Footer>

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
            <S.ModalTitle>Excluir Estudante</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <p style={{ color: theme.colors.darkGray, textAlign: 'center' }}>
              Tem certeza que deseja deletar o estudante{' '}
              <strong>{fullName}</strong>?
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
                onClick={() => handleDeleteStudent(id)}
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

export default StudentCrudCard
