import { NextSeo } from 'next-seo'
import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import { SITE_NAME } from 'pages/_app'

import {
  DocumenStatstMapper,
  StudentsStatstMapper,
  UserMapper,
  VideoStatsMapper
} from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

import DashboardTemplate, { DashboardProps } from 'templates/Admin/Dashboard'

export default function Dashboard(props: DashboardProps) {
  return (
    <>
      <NextSeo title={`Painel de Controle - ${SITE_NAME}`} />
      <DashboardTemplate {...props} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const videos = await api.get('/video/getAll', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const documents = await api.get('/document/getAll', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const students = await api.get('/student/getAllExceptAdmins', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const topVideos = videos.data
    .sort((a: any, b: any) => (a.views > b.views ? -1 : 1))
    .slice(0, 5)

  const topDocuments = documents.data
    .sort((a: any, b: any) => (a.views > b.views ? -1 : 1))
    .slice(0, 5)

  const topStudents = students.data
    .sort((a: any, b: any) => (a.point > b.point ? -1 : 1))
    .slice(0, 5)

  if (!session?.isAdmin) {
    context.res.setHeader('Location', '/student/dashboard')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      session,
      student: UserMapper(user.data),
      videos: VideoStatsMapper(topVideos),
      countVideos: videos.data.length,
      documents: DocumenStatstMapper(topDocuments),
      countDocuments: documents.data.length,
      students: StudentsStatstMapper(topStudents),
      countStudents: students.data.length
    }
  }
}
