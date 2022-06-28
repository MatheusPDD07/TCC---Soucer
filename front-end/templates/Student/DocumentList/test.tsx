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
  documents: [
    {
      id: 'string',
      title: 'string',
      stars: 1,
      keys: 'string',
      views: 1,
      topic: {
        id: 'string',
        title: 'string'
      },
      student: {
        id: 'string',
        name: 'string',
        lastName: 'string',
        imageUrl: 'string'
      }
    }
  ],
  myDocuments: [
    {
      id: 'string',
      title: 'string',
      urlDocument: 'string',
      topicId: 'string',
      stars: 2,
      keys: 'string',
      views: 2,
      student: {
        id: 'string',
        name: 'string',
        lastName: 'string',
        imageUrl: 'string'
      },
      topics: []
    }
  ]
}

describe('<Video />', () => {
  it('should render the heading', () => {
    render(
      <Video
        student={props.student}
        documents={props.documents}
        myDocuments={props.myDocuments}
        topics={[]}
      />
    )

    expect(screen.getByRole('heading', { name: /Video/i })).toBeInTheDocument()
  })
})
