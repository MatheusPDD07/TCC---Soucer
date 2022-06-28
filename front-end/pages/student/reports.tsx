import { GetServerSidePropsContext } from 'next'
import api from 'service/api'
import ReportsTemplate, {
  ReportsTemplateProps
} from 'templates/Student/Reports'
import {
  DocumenReportstMapper,
  UserMapper,
  VideoReportsMapper
} from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function Reports(props: ReportsTemplateProps) {
  return <ReportsTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const topVideos = user.data.videosPosted.sort((a: any, b: any) =>
    a.views > b.views ? -1 : 1
  )

  const topDocuments = user.data.documentsPosted.sort((a: any, b: any) =>
    a.views > b.views ? -1 : 1
  )

  if (session?.isAdmin) {
    context.res.setHeader('Location', '/admin/reports')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      session,
      user: UserMapper(user.data),
      videos: VideoReportsMapper(topVideos),
      documents: DocumenReportstMapper(topDocuments)
    }
  }
}
