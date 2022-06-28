import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import StudentAdminTemplate, {
  StudentTemplateProps
} from 'templates/Admin/Student'

import { StudentsMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function Student(props: StudentTemplateProps) {
  return <StudentAdminTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const students = await api.get('/student/getAllExceptAdmins', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  if (!session?.isAdmin) {
    context.res.setHeader('Location', '/student/dashboard')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      user: {
        name: `${session.user?.name} ${session.lastName}`,
        photo: session.user?.image
      },
      students: StudentsMapper(students.data)
    }
  }
}
