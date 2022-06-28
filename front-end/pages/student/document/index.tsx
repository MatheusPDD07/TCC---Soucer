import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import DocumentList, { DocumentListProps } from 'templates/Student/DocumentList'

import protectedRoutes from 'utils/protected-routes'
import { DocumentMapper, MyDocumentMapper, UserMapper } from 'utils/mappers'

export default function document(props: DocumentListProps) {
  return <DocumentList {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const documents = await api.get('/document/getAll', {
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

  if (session?.isAdmin) {
    context.res.setHeader('Location', '/admin/dashboard')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      student: UserMapper(user.data),
      documents: DocumentMapper(documents.data),
      myDocuments: MyDocumentMapper(user.data.documentsPosted),
      topics
    }
  }
}
