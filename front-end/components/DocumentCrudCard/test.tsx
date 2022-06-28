import { render, screen } from 'utils/test-utils'

import DocumentCrudCard from '.'

import mock from './mock'

const props = {
  ...mock
}

describe('<DocumentCrudCard />', () => {
  it('should render the heading', () => {
    render(<DocumentCrudCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /DocumentCrudCard/i })
    ).toBeInTheDocument()
  })
})
