import { NextSeo } from 'next-seo'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Breadcrumb from 'components/Breadcrumb'
import StudentInfo from 'components/StudentInfo'
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

export type StudentProps = {
  id: string
  name: string
  lastName: string
  imageUrl: string
  email: string
  userName: string
  points: number
  videos: VideoCardProps[]
  documents: DocumentCardProps[]
}

export type StudentPageTemplateProps = {
  user: UserProps
  student: StudentProps
}

const StudentPageTemplate = ({ user, student }: StudentPageTemplateProps) => {
  return (
    <Base user={user}>
      <NextSeo title={`${student.name} ${student.lastName} - ${SITE_NAME}`} />
      <Breadcrumb title={`${student.name} ${student.lastName}`} />

      <S.StudentArea>
        <StudentInfo
          name={student.name}
          lastName={student.lastName}
          imageUrl={student.imageUrl}
          email={student.email}
          userName={student.userName}
        />
      </S.StudentArea>

      <S.Wrapper>
        <Tabs>
          <TabList>
            <Tab>Vídeos de {student.name}</Tab>
            <Tab>Documentos de {student.name}</Tab>
          </TabList>

          <TabPanel>
            <VideoCardPagination items={student.videos} />
          </TabPanel>
          <TabPanel>
            <DocumentCardPagination items={student.documents} />
          </TabPanel>
        </Tabs>
      </S.Wrapper>
    </Base>
  )
}

export default StudentPageTemplate
