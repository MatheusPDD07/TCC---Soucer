import { useState } from 'react'
import { NextSeo } from 'next-seo'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import { MdClose } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import * as S from './styles'

import Modal from 'components/Modal'
import Button from 'components/Button'
import AddVideo from 'components/AddVideo'
import VideoCrudCardPagination from 'components/VideoCrudCardPagination'

import { VideoTemplateProps } from './types'

const VideoTemplate = ({ user, videos, topics }: VideoTemplateProps) => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)

  return (
    <Base user={user}>
      <NextSeo title={`Vídeos - ${SITE_NAME}`} />

      <S.Top>
        <S.Title>Vídeos</S.Title>
        <Button
          icon={<AiOutlinePlus size={20} />}
          size="small"
          onClick={() => setAddModalIsOpen(true)}
        >
          Adicionar Video
        </Button>
      </S.Top>

      <VideoCrudCardPagination items={videos} topics={topics} />

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
            <S.ModalTitle>Adicionar Vídeo</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <AddVideo topics={topics} />
          </S.ModalBody>
        </S.ModalContent>
      </Modal>
    </Base>
  )
}

export default VideoTemplate
