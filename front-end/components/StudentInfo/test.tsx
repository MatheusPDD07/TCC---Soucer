import { render, screen } from 'utils/test-utils'

import StudentInfo from '.'

const props = {
  id: 'ed0136d3-6035-48db-96dd-6cecaf85e7fa',
  name: 'Mike',
  lastName: 'Santos',
  imageUrl:
    'https://studyingstorage.blob.core.windows.net/imagesavatar/c4b2679d-6728-4ba0-bcbf-d59c88713bd9.jpg'
}

describe('<StudentInfo />', () => {
  it('should render the heading', () => {
    render(<StudentInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /StudentInfo/i })
    ).toBeInTheDocument()
  })
})
