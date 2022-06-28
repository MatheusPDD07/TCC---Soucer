import { NextSeo } from 'next-seo'
import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import { SITE_NAME } from 'pages/_app'

import DashboardTemplate, { DashboardProps } from 'templates/Student/Dashboard'

import {
  DocumenStatstMapper,
  UserMapper,
  VideoStatsMapper
} from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

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

  const topVideos = user.data.videosPosted
    .sort((a: any, b: any) => (a.views > b.views ? -1 : 1))
    .slice(0, 5)

  const topDocuments = user.data.documentsPosted
    .sort((a: any, b: any) => (a.views > b.views ? -1 : 1))
    .slice(0, 5)

  if (session?.isAdmin) {
    context.res.writeHead(302, {
      Location: `/admin/dashboard`
    })
    context.res.end()
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      session,
      student: UserMapper(user.data),
      videos: VideoStatsMapper(topVideos),
      documents: DocumenStatstMapper(topDocuments)
    }
  }
}
