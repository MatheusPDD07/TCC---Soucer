import { render, screen } from 'utils/test-utils'

import VideosStats from '.'

import mock from './mock'

const props = { videos: mock, title: 'string' }

describe('<VideosStats />', () => {
  it('should render the heading', () => {
    render(<VideosStats {...props} />)

    expect(
      screen.getByRole('heading', { name: /VideosStats/i })
    ).toBeInTheDocument()
  })
})
