import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import VideoTemplate, { VideoTemplateProps } from 'templates/Student/Video'

import protectedRoutes from 'utils/protected-routes'
import { MyVideoMapper, UserMapper, VideoMapper } from 'utils/mappers'

export default function Video(props: VideoTemplateProps) {
  return <VideoTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const headers = {
    Authorization: `Bearer ${session?.jwt}`
  }

  const user = await api.get(`/student/${session?.id}`, {
    headers
  })

  const videos = await api.get('/video/getAll', {
    headers
  })

  const allTopics = await api.get('/topic/getAll', {
    headers
  })

  const topics = [...allTopics.data]

  allTopics.data.map((topic: { sons: any[] }) => {
    topics.push(...topic.sons)
  })

  if (user.data.isAdmin) {
    context.res.setHeader('Location', '/admin/dashboard')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      student: UserMapper(user.data),
      videos: VideoMapper(videos.data),
      myVideos: MyVideoMapper(user.data.videosPosted),
      topics
    }
  }
}
