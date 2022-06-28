import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'

import mock from './mock'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    render(<ProfileMenu {...mock} />)

    expect(screen.getByRole('img', { name: /Studying/i })).toBeInTheDocument()
  })
})
