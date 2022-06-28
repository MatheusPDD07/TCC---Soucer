import { render, screen } from 'utils/test-utils'

import VideoInfo from '.'

const props = {
  id: '618a5161-7584-4f03-b8ff-0928db569ebc',
  topic: {
    id: 'abd1aaca-bfcf-480f-b8f9-e0293c4d6eee',
    title: 'Frontend'
  },
  title: 'Curso React: Eventos no React (onClick, onChange e onSubmit) - #09',
  star: 0,
  keys: 'React;Curso react; intro react; introdução ao react',
  views: 1,
  isFavorite: false
}

describe('<VideoInfo />', () => {
  it('should render the heading', () => {
    render(<VideoInfo {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /Curso React: Eventos no React (onClick, onChange e onSubmit) - #09/i
      })
    ).toBeInTheDocument()
  })
})
