import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Heading from 'components/Heading'
import AddVideo from 'components/AddVideo'
import Breadcrumb from 'components/Breadcrumb'
import { VideoCardProps } from 'components/VideoCard'
import { VideoCrudCardProps } from 'components/VideoCrudCard'
import VideoCardPagination from 'components/VideoCardPagination'
import VideoCrudCardPagination from 'components/VideoCrudCardPagination'

import { MdAdd, MdClose } from 'react-icons/md'

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
  points: number
}

export type VideoTemplateProps = {
  student: StudentProps
  videos: VideoCardProps[]
  myVideos: VideoCrudCardProps[]
  topics: TopicData[]
}

const VideoTemplate = ({
  student,
  videos,
  myVideos,
  topics
}: VideoTemplateProps) => {
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
      <NextSeo title={`Vídeos - ${SITE_NAME}`} />

      <Breadcrumb title="Videos" />

      <S.Header>
        <Heading title="Vídeos" />
        <Button
          bgColor="secondary"
          icon={<MdAdd size={24} />}
          onClick={() => setAddModal(true)}
        >
          Adicionar Vídeo
        </Button>
      </S.Header>

      <S.VideoWrapper>
        <Tabs>
          <TabList>
            <Tab>Todos os Vídeos</Tab>
            <Tab>Meus Vídeos</Tab>
          </TabList>

          <TabPanel>
            <VideoCardPagination items={videos} />
          </TabPanel>
          <TabPanel>
            <VideoCrudCardPagination
              items={myVideos}
              topics={topics}
              pageButton={
                <Button
                  bgColor="secondary"
                  icon={<MdAdd size={24} />}
                  onClick={() => setAddModal(true)}
                >
                  Adicionar Vídeo
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
