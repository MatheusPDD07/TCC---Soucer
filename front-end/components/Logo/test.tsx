import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label default', () => {
    render(<Logo />)
    const logo = screen.getByLabelText(/Studying/i)

    expect(logo?.querySelector('.simbolBackground')).toHaveStyle({
      fill: '#FFFFFF'
    })
    expect(logo?.querySelector('.slogan')).toHaveStyle({
      fill: '#FFFFFF'
    })
    expect(logo?.querySelector('.name')).toHaveStyle({
      fill: '#FFFFFF'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="color" />)
    const logo = screen.getByLabelText(/Studying/i)
    expect(logo?.querySelector('.simbolBackground')).toHaveStyle({
      fill: '#CBCCCE'
    })
    expect(logo?.querySelector('.slogan')).toHaveStyle({
      fill: '#214888'
    })
    expect(logo?.querySelector('.name')).toHaveStyle({
      fill: '#121212'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Studying/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/Studying/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Studying/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
