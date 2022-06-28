import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Breadcrumb from 'components/Breadcrumb'
import AddDocument from 'components/AddDocument'
import { DocumentCardProps } from 'components/DocumentCard'
import { DocumentCrudCardProps } from 'components/DocumentCrudCard'
import DocumentCardPagination from 'components/DocumentCardPagination'
import DocumentCrudCardPagination from 'components/DocumentCrudCardPagination'

import { MdAdd, MdClose } from 'react-icons/md'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

export type TopicData = {
  id: string
  title: string
}

export type StudentProps = {
  name: string
  lastName: string
  imageUrl: string
  isAdmin: boolean
  points: number
}

export type DocumentListProps = {
  student: StudentProps
  documents: DocumentCardProps[]
  myDocuments: DocumentCrudCardProps[]
  topics: TopicData[]
}

const DocumentList = ({
  student,
  documents,
  myDocuments,
  topics
}: DocumentListProps) => {
  const [addModal, setAddModal] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setAddModal(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <Base user={student}>
      <NextSeo title={`Documentos - ${SITE_NAME}`} />

      <Breadcrumb title="Documentos" />

      <S.Header>
        <Heading title="Documentos" />
        <Button
          bgColor="secondary"
          icon={<MdAdd size={24} />}
          onClick={() => setAddModal(true)}
        >
          Adicionar Documento
        </Button>
      </S.Header>

      <S.VideoWrapper>
        <Tabs>
          <TabList>
            <Tab>Todos os Documentos</Tab>
            <Tab>Meus Documentos</Tab>
          </TabList>

          <TabPanel>
            <DocumentCardPagination items={documents} />
          </TabPanel>
          <TabPanel>
            <DocumentCrudCardPagination
              items={myDocuments}
              topics={topics}
              pageButton={
                <Button
                  bgColor="secondary"
                  icon={<MdAdd size={24} />}
                  onClick={() => setAddModal(true)}
                >
                  Adicionar Documento
                </Button>
              }
            />
          </TabPanel>
        </Tabs>
      </S.VideoWrapper>

      <Modal templateIsOpen={addModal}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setAddModal(false)}
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

export default DocumentList
