import styled, { css } from 'styled-components'

import * as EmptStyle from 'components/Empty/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 40%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};

    ${EmptStyle.Wrapper} {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  `}
`
