import { GetServerSidePropsContext } from 'next'
import api from 'service/api'
import StudentPageTemplate, {
  StudentPageTemplateProps
} from 'templates/Student/StudentPage'
import { StudentPageMapper, UserMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function StudentPage(props: StudentPageTemplateProps) {
  return <StudentPageTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const student = await api.get(`/student/${context.query.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  if (session?.isAdmin) {
    context.res.setHeader('Location', '/admin/dashboard')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      user: UserMapper(user.data),
      student: StudentPageMapper(student.data)
    }
  }
}
