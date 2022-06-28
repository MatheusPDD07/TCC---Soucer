import { GetServerSidePropsContext } from 'next'
import api from 'service/api'
import ReportsTemplate, { ReportsTemplateProps } from 'templates/Admin/Reports'
import {
  DocumenReportstMapper,
  StudentsReportMapper,
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

  const videos = await api.get('/video/getAll', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const docs = await api.get(`/document/getAll`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const students = await api.get('/student/getAllExceptAdmins', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const topVideos = videos.data.sort((a: any, b: any) =>
    a.views > b.views ? -1 : 1
  )

  const topDocuments = docs.data.sort((a: any, b: any) =>
    a.views > b.views ? -1 : 1
  )

  const topStudents = students.data.sort((a: any, b: any) =>
    a.point > b.point ? -1 : 1
  )

  if (!session?.isAdmin) {
    context.res.setHeader('Location', '/student/reports')
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
      documents: DocumenReportstMapper(topDocuments),
      students: StudentsReportMapper(topStudents)
    }
  }
}
