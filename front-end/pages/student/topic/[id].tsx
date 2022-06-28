import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import TopicPageTemplate, {
  TopicPageTemplateProps
} from 'templates/Student/TopicPage'

import protectedRoutes from 'utils/protected-routes'
import { TopicMapper, UserMapper } from 'utils/mappers'

export default function TopicPage(props: TopicPageTemplateProps) {
  return <TopicPageTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const topic = await api.get(`/topic/${context.query.id}`, {
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
      topic: TopicMapper(topic.data)
    }
  }
}
