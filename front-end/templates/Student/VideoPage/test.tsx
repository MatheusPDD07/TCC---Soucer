import { render, screen } from 'utils/test-utils'

import VideoPage from '.'

const props = {
  student: {
    name: 'Mike',
    lastName: 'Santos',
    imageUrl:
      'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
    isAdmin: false,
    points: 0
  },
  video: {
    id: '618a5161-7584-4f03-b8ff-0928db569ebc',
    topic: {
      id: 'abd1aaca-bfcf-480f-b8f9-e0293c4d6eee',
      title: 'Frontend'
    },
    title: 'Curso React: Eventos no React (onClick, onChange e onSubmit) - #09',
    urlVideo:
      'https://www.youtube.com/watch?v=20hlPRPVMoU&ab_channel=MatheusBattisti-HoradeCodar',
    star: 1,
    keys: 'React;Curso react; intro react; introdução ao react',
    views: 2,
    thumbnail:
      'https://studyingstorage.blob.core.windows.net/thumbnail/b864847a-9a92-469d-8045-d092c8b6f40f.jpg',
    student: {
      id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
      name: 'Gabriel',
      lastName: 'Bortone',
      imageUrl: 'https://www.w3schools.com/w3css/img_forest.jpg'
    },
    isFavorite: false
  }
}

describe('<VideoPage />', () => {
  it('should render the heading', () => {
    render(<VideoPage student={props.student} video={props.video} />)

    expect(
      screen.getByRole('heading', { name: /VideoPage/i })
    ).toBeInTheDocument()
  })
})
