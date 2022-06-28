import { render, screen } from 'utils/test-utils'

import DocumentPageTemplate from '.'

const props = {
  student: {
    name: 'Mike',
    lastName: 'Santos',
    imageUrl:
      'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
    isAdmin: false,
    points: 0
  },
  document: {
    id: 'string',
    title: 'string',
    urlDocument: 'string',
    stars: 2,
    keys: 'string',
    views: 2,
    topic: {
      id: 'abd1aaca-bfcf-480f-b8f9-e0293c4d6eee',
      title: 'Frontend'
    },
    student: {
      id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
      name: 'Gabriel',
      lastName: 'Bortone',
      imageUrl: 'https://www.w3schools.com/w3css/img_forest.jpg'
    },
    isFavorite: false
  }
}

describe('<DocumentPageTemplate />', () => {
  it('should render the heading', () => {
    render(
      <DocumentPageTemplate student={props.student} document={props.document} />
    )

    expect(
      screen.getByRole('heading', { name: /DocumentPageTemplate/i })
    ).toBeInTheDocument()
  })
})
