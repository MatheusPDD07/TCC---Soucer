import { NextSeo } from 'next-seo'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Breadcrumb from 'components/Breadcrumb'

import { MdOutlineLocalPrintshop } from 'react-icons/md'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'
import { GenerateAdminReport } from 'utils/generateReport'
import VideosTable from 'components/VideosTable'
import DocumentsTable from 'components/DocumentsTable'
import StudentsTable from 'components/StudentsTable'

export type StudentProps = {
  name: string
  photo: string
}

export type VideoStatsData = {
  title: string
  views: number
}

export type DocumentsStatsData = {
  title: string
  views: number
}

export type StudentData = {
  name: string
  points: number
}

export type ReportsTemplateProps = {
  user: StudentProps
  videos: VideoStatsData[]
  documents: DocumentsStatsData[]
  students: StudentData[]
}

const ReportsTemplate = ({
  user,
  videos,
  documents,
  students
}: ReportsTemplateProps) => {
  const handlePrintReports = () => {
    GenerateAdminReport(videos, documents, students)
  }

  return (
    <Base user={user}>
      <NextSeo title={`Relatórios - ${SITE_NAME}`} />

      <Breadcrumb title="Relatórios" />

      <S.Header>
        <Heading title="Relatórios" />
        <Button
          onClick={() => handlePrintReports()}
          size="small"
          icon={<MdOutlineLocalPrintshop size={20} />}
        >
          Imprimir Relatório
        </Button>
      </S.Header>

      <S.Wrapper>
        <VideosTable videos={videos} />
        <DocumentsTable documents={documents} />
        <StudentsTable students={students} />
      </S.Wrapper>
    </Base>
  )
}

export default ReportsTemplate
