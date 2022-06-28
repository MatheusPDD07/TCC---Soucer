import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
