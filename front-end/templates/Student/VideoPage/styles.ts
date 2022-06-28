import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  gap: 2rem;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}
`

export const VideoInfoArea = styled.div`
  width: 40%;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const VideoPlayerArea = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 30rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    iframe {
      width: 100%;
      height: 100%;
    }
  `}
`
