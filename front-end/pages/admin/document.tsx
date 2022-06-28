import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import DocumentTemplate, {
  DocumentTemplateProps
} from 'templates/Admin/Document'

import { MyDocumentMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function Document(props: DocumentTemplateProps) {
  return <DocumentTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const docs = await api.get(`/document/getAll`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const allTopics = await api.get('/topic/getAll', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const topics = [...allTopics.data]

  allTopics.data.map((topic: { sons: any[] }) => {
    topics.push(...topic.sons)
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
      docs: MyDocumentMapper(docs.data),
      topics
    }
  }
}
