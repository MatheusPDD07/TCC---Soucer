import { NextSeo } from 'next-seo'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import Breadcrumb from 'components/Breadcrumb'
import StudentInfo from 'components/StudentInfo'
import DocumentInfo from 'components/DocumentInfo'
import { StudentData, TopicData } from 'components/VideoCard'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

import { StudentProps } from '../Video'

export type DocumentPageData = {
  id: string
  title: string
  urlDocument: string
  stars: number
  keys: string
  views: number
  topic: TopicData
  student: StudentData
  isFavorite: boolean
  isStar: boolean
}

export type DocumentPageTemplateProps = {
  student: StudentProps
  document: DocumentPageData
}

const DocumentPageTemplate = ({
  student,
  document
}: DocumentPageTemplateProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Base user={student}>
      <NextSeo title={`${document.title} - ${SITE_NAME}`} />

      <Breadcrumb
        title={document.title}
        supTitle="Documentos"
        supUrl="/document"
      />

      <S.Content>
        <S.InfoArea>
          <StudentInfo
            id={document.student.id}
            name={document.student.name}
            lastName={document.student.lastName}
            imageUrl={document.student.imageUrl}
          />
          <DocumentInfo
            id={document.id}
            isFavorite={document.isFavorite}
            isStar={document.isStar}
            keys={document.keys}
            stars={document.stars}
            title={document.title}
            views={document.views}
          />
        </S.InfoArea>
        <S.PlayerArea>
          {/* https://res.cloudinary.com/mikedevanorak/image/upload/v1654353046/Placeholder-PDF_hy3xh2.pdf */}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer
              fileUrl={document.urlDocument}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </S.PlayerArea>
      </S.Content>
    </Base>
  )
}

export default DocumentPageTemplate
