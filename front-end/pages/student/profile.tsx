import { GetServerSidePropsContext } from 'next'
import api from 'service/api'
import ProfileTemplate, {
  ProfileTemplateProps
} from 'templates/Student/Profile'
import { ProfileMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function Profile(props: ProfileTemplateProps) {
  return <ProfileTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const { data } = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  if (data.isAdmin) {
    context.res.setHeader('Location', '/admin/student')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      student: ProfileMapper(data)
    }
  }
}
