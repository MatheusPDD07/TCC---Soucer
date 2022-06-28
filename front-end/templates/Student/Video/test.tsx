import { render, screen } from 'utils/test-utils'

import Video from '.'

const props = {
  student: {
    name: 'Mike',
    lastName: 'Santos',
    imageUrl:
      'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
    isAdmin: false,
    points: 0
  },
  videos: [
    {
      id: '618a5161-7584-4f03-b8ff-0928db569ebc',
      topic: {
        id: 'abd1aaca-bfcf-480f-b8f9-e0293c4d6eee',
        title: 'Frontend'
      },
      title:
        'Curso React: Eventos no React (onClick, onChange e onSubmit) - #09',
      views: 1,
      thumbnail:
        'https://studyingstorage.blob.core.windows.net/thumbnail/adaf7b0d-5380-4126-a384-eb1fc8daed9c.jpg',
      student: {
        id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
        name: 'Gabriel',
        lastName: 'Bortone',
        imageUrl: 'https://www.w3schools.com/w3css/img_forest.jpg'
      }
    }
  ],
  myVideos: [
    {
      id: 'string',
      topic: {
        id: 'abd1aaca-bfcf-480f-b8f9-e0293c4d6eee',
        title: 'Frontend'
      },
      title: 'string',
      urlVideo: 'string',
      star: 2,
      keys: 'string',
      views: 2,
      thumbnail: 'string',
      student: {
        id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
        name: 'Gabriel',
        lastName: 'Bortone',
        imageUrl: 'https://www.w3schools.com/w3css/img_forest.jpg'
      },
      isFavorite: false,
      topics: []
    }
  ]
}

describe('<Video />', () => {
  it('should render the heading', () => {
    render(
      <Video
        student={props.student}
        videos={props.videos}
        myVideos={props.myVideos}
        topics={[]}
      />
    )

    expect(screen.getByRole('heading', { name: /Video/i })).toBeInTheDocument()
  })
})
