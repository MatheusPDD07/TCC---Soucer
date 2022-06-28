import styled, { css } from 'styled-components'

import * as EmptyStyles from 'components/Empty/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12rem 0;

    ${EmptyStyles.description} {
      color: ${theme.colors.title};
    }
  `}
`
