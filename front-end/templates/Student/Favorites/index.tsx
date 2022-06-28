import { NextSeo } from 'next-seo'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Breadcrumb from 'components/Breadcrumb'
import { VideoCardProps } from 'components/VideoCard'
import { DocumentCardProps } from 'components/DocumentCard'
import VideoCardPagination from 'components/VideoCardPagination'
import DocumentCardPagination from 'components/DocumentCardPagination'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import { MdAdd } from 'react-icons/md'

import * as S from './styles'

import { StudentProps } from '../Dashboard'

export type FavoritesTemplateProps = {
  student: StudentProps
  videos: VideoCardProps[]
  documents: DocumentCardProps[]
}

const FavoritesTemplate = ({
  student,
  videos,
  documents
}: FavoritesTemplateProps) => {
  return (
    <Base user={student}>
      <NextSeo title={`Favoritos - ${SITE_NAME}`} />
      <Breadcrumb title="Favoritos" />
      <Heading title="Favoritos" />

      <S.Wrapper>
        <Tabs>
          <TabList>
            <Tab>Vídeos</Tab>
            <Tab>Documentos</Tab>
          </TabList>

          <TabPanel>
            <VideoCardPagination
              items={videos}
              pageButton={
                <Button
                  bgColor="secondary"
                  icon={<MdAdd size={24} />}
                  as="a"
                  href="/student/video"
                >
                  Adicionar aos Favoritos
                </Button>
              }
            />
          </TabPanel>
          <TabPanel>
            <DocumentCardPagination
              items={documents}
              pageButton={
                <Button
                  bgColor="secondary"
                  icon={<MdAdd size={24} />}
                  as="a"
                  href="/student/document"
                >
                  Adicionar aos Favoritos
                </Button>
              }
            />
          </TabPanel>
        </Tabs>
      </S.Wrapper>
    </Base>
  )
}

export default FavoritesTemplate
