import { useState } from 'react'
import { NextSeo } from 'next-seo'

import Modal from 'components/Modal'
import Button from 'components/Button'
import AddDocument from 'components/AddDocument'
import { DocumentCrudCardProps } from 'components/DocumentCrudCard'
import DocumentCrudCardPagination from 'components/DocumentCrudCardPagination'

import { MdClose } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import { SITE_NAME } from 'pages/_app'

import Base, { UserData } from '../Base'

import * as S from './styles'

export type TopicsData = {
  id: string
  title: string
}

export type DocumentTemplateProps = {
  user: UserData
  docs: DocumentCrudCardProps[]
  topics: TopicsData[]
}

const DocumentTemplate = ({ user, docs, topics }: DocumentTemplateProps) => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)

  return (
    <Base user={user}>
      <NextSeo title={`Documentos - ${SITE_NAME}`} />

      <S.Top>
        <S.Title>Documentos</S.Title>
        <Button
          icon={<AiOutlinePlus size={20} />}
          size="small"
          onClick={() => setAddModalIsOpen(true)}
        >
          Adicionar Documento
        </Button>
      </S.Top>

      <DocumentCrudCardPagination items={docs} topics={topics} />

      <Modal templateIsOpen={addModalIsOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setAddModalIsOpen(false)}
        >
          <MdClose size={40} />
        </S.Close>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>Adicionar Documento</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <AddDocument topics={topics} />
          </S.ModalBody>
        </S.ModalContent>
      </Modal>
    </Base>
  )
}

export default DocumentTemplate
