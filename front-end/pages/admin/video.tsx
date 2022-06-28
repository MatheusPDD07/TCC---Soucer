import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import VideoTemplate from 'templates/Admin/Video'
import { VideoTemplateProps } from 'templates/Admin/Video/types'

import protectedRoutes from 'utils/protected-routes'

export default function Video(props: VideoTemplateProps) {
  return <VideoTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const videos = await api.get('/video/getAll', {
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
      videos: videos.data,
      topics
    }
  }
}
