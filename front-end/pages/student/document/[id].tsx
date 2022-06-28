import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import DocumentPageTemplate, {
  DocumentPageTemplateProps
} from 'templates/Student/DocumentPage'

import protectedRoutes from 'utils/protected-routes'
import { DocumentPageMapper, UserMapper } from 'utils/mappers'

export default function DocumentPage(props: DocumentPageTemplateProps) {
  return <DocumentPageTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const document = await api.get(`/document/${context.query.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`,
      'Content-Type': 'application/json'
    }
  })

  if (user.data.isAdmin) {
    context.res.setHeader('Location', '/admin/student')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      student: UserMapper(user.data),
      document: DocumentPageMapper(document.data)
    }
  }
}
