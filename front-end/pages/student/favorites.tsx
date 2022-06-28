import { GetServerSidePropsContext } from 'next'

import api from 'service/api'

import FavoritesTemplate, {
  FavoritesTemplateProps
} from 'templates/Student/Favorites'

import protectedRoutes from 'utils/protected-routes'
import { DocumentMapper, UserMapper, VideoMapper } from 'utils/mappers'

export default function Favorites(props: FavoritesTemplateProps) {
  return <FavoritesTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const user = await api.get(`/student/${session?.id}`, {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  })

  if (session?.isAdmin) {
    context.res.setHeader('Location', '/admin/student')
    context.res.statusCode = 302
  }

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      student: UserMapper(user.data),
      videos: VideoMapper(user.data.allFavorites.videosFavorites),
      documents: DocumentMapper(user.data.allFavorites.documentsFavorites)
    }
  }
}
