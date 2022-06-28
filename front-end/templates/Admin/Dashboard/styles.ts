import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Statistics = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    margin: ${theme.spacings.small} 0;

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`
