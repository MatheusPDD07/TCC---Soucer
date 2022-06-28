import { GetServerSidePropsContext } from 'next'

import TopicsTemplate, { TopicsTempalteProps } from 'templates/Admin/Topics'

import api from 'service/api'

import { TopicsMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function Topics(props: TopicsTempalteProps) {
  return <TopicsTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

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
      topics: TopicsMapper(topics)
    }
  }
}
