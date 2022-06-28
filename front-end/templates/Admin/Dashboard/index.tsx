import { NextSeo } from 'next-seo'

import Hero from 'components/Hero'
import VideosStats, { VideoStatsData } from 'components/VideosStats'
import StudentsStats, { StudentsStatsData } from 'components/StudentsStats'
import DocumentsStats, { DocumentsStatsData } from 'components/DocumentsStats'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

export type StudentProps = {
  name: string
  photo: string
}

export type DashboardProps = {
  student: StudentProps
  videos: VideoStatsData[]
  documents: DocumentsStatsData[]
  students: StudentsStatsData[]
  countVideos: number
  countDocuments: number
  countStudents: number
}

const DashboardTemplate = ({
  student,
  videos,
  documents,
  students,
  countVideos,
  countDocuments,
  countStudents
}: DashboardProps) => (
  <Base user={student}>
    <NextSeo title={`Painel de Controle - ${SITE_NAME}`} />

    <Hero
      name={student.name}
      countVideos={countVideos}
      countDocuments={countDocuments}
      countStudents={countStudents}
    />

    <S.Statistics>
      <VideosStats videos={videos} title="Vídeos mais assistidos" />
      <DocumentsStats documents={documents} title="Documentos mais acessados" />
      <StudentsStats students={students} title="Estudantes Destacados" />
    </S.Statistics>
  </Base>
)

export default DashboardTemplate
