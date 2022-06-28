import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    thead {
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary};

      tr,
      th {
        padding: 1rem 2rem;
      }
    }

    tbody {
      tr,
      td {
        padding: 1rem 2rem;
      }

      tr:nth-child(even) {
        background-color: ${theme.colors.white};
      }
      tr:nth-child(odd) {
        background-color: ${theme.colors.lightGray};
      }
    }

    .primeiraColuna {
      width: 70%;
    }
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  ${media.greaterThan('medium')`
    justify-content: space-between;
    flex-direction: row;

    ${HeadingStyles.Wrapper},
    ${HeadingStyles.Wrapper} h1 {
      margin: 0;
    }
  `}
`
