import { NextSeo } from 'next-seo'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Breadcrumb from 'components/Breadcrumb'
import { VideoCardProps } from 'components/VideoCard'
import { DocumentCardProps } from 'components/DocumentCard'
import VideoCardPagination from 'components/VideoCardPagination'
import DocumentCardPagination from 'components/DocumentCardPagination'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

export type UserProps = {
  name: string
  lastName: string
  imageUrl: string
  isAdmin: boolean
  points: number
}

export type TopicProps = {
  title: string
  description: string
  videos: VideoCardProps[]
  documents: DocumentCardProps[]
}

export type TopicPageTemplateProps = {
  user: UserProps
  topic: TopicProps
}

const TopicPageTemplate = ({ user, topic }: TopicPageTemplateProps) => {
  return (
    <Base user={user}>
      <NextSeo title={`${topic.title} - ${SITE_NAME}`} />
      <Breadcrumb title={`${topic.title}`} />

      <S.TopicArea>
        <h3>{topic.title}</h3>
        <small>{topic.description}</small>
      </S.TopicArea>

      <S.Wrapper>
        <Tabs>
          <TabList>
            <Tab>Vídeos de {topic.title}</Tab>
            <Tab>Documentos de {topic.title}</Tab>
          </TabList>

          <TabPanel>
            <VideoCardPagination items={topic.videos} />
          </TabPanel>
          <TabPanel>
            <DocumentCardPagination items={topic.documents} />
          </TabPanel>
        </Tabs>
      </S.Wrapper>
    </Base>
  )
}

export default TopicPageTemplate
