import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import VideoPageTemplate, {
  VideoPageTemplateProps
} from 'templates/Student/VideoPage'

import protectedRoutes from 'utils/protected-routes'
import { UserMapper, VideoPageMapper } from 'utils/mappers'

export default function VideoPage(props: VideoPageTemplateProps) {
  return <VideoPageTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  const video = await api.get(`/video/${context.query.id}`, {
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
      video: VideoPageMapper(video.data)
    }
  }
}
