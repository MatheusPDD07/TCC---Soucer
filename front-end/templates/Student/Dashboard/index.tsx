import { NextSeo } from 'next-seo'

import Hero from 'components/Hero'
import VideosStats, { VideoStatsData } from 'components/VideosStats'
import DocumentsStats, { DocumentsStatsData } from 'components/DocumentsStats'

import { SITE_NAME } from 'pages/_app'
import Base from '../Base'

import * as S from './styles'

export type StudentProps = {
  name: string
  lastName: string
  imageUrl: string
  isAdmin: boolean
  points: number
}

export type DashboardProps = {
  student: StudentProps
  videos: VideoStatsData[]
  documents: DocumentsStatsData[]
}

const DashboardTemplate = ({ student, videos, documents }: DashboardProps) => (
  <Base user={student}>
    <NextSeo title={`Painel de Controle - ${SITE_NAME}`} />

    <Hero name={student.name} />

    <S.Statistics>
      <VideosStats videos={videos} title="Vídeos mais assistidos" />
      <DocumentsStats documents={documents} title="Documentos mais acessados" />
    </S.Statistics>
  </Base>
)

export default DashboardTemplate
