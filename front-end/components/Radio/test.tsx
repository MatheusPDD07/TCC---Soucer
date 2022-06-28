import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label', () => {
    render(<Radio label="Radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
  })

  it('should render with black label', () => {
    render(<Radio label="Radio" labelColor="black" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render without label', () => {
    render(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()
    render(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    render(<Radio label="Radio" labelFor="Radio" />)

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByLabelText(/Radio/i)).toHaveFocus()
  })
})
