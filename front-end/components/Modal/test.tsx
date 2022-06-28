import { render, screen } from 'utils/test-utils'

import Modal from '.'

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(
      <Modal templateIsOpen>
        <h1>Modal</h1>
      </Modal>
    )

    expect(screen.getByRole('heading', { name: /Modal/i })).toBeInTheDocument()
  })
})
