import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  gap: 2rem;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}
`

export const InfoArea = styled.div`
  width: 40%;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const PlayerArea = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 45rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
  `}
`
