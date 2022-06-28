import { NextSeo } from 'next-seo'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Breadcrumb from 'components/Breadcrumb'

import { MdOutlineLocalPrintshop } from 'react-icons/md'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'
import { GenerateStudentReport } from 'utils/generateReport'
import VideosTable from 'components/VideosTable'
import DocumentsTable from 'components/DocumentsTable'

export type StudentProps = {
  name: string
  lastName: string
  imageUrl: string
  isAdmin: boolean
  points: number
}

export type VideoStatsData = {
  title: string
  views: number
}

export type DocumentsStatsData = {
  title: string
  views: number
}

export type ReportsTemplateProps = {
  user: StudentProps
  videos: VideoStatsData[]
  documents: DocumentsStatsData[]
}

const ReportsTemplate = ({ user, videos, documents }: ReportsTemplateProps) => {
  const handlePrintReports = () => {
    GenerateStudentReport(videos, documents)
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
      </S.Wrapper>
    </Base>
  )
}

export default ReportsTemplate
