import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.small`
  display: flex;
  gap: 1rem;
  color: #6d6d6d;
  margin-bottom: 5rem;

  ${media.lessThan('medium')`
    margin: 2rem 0 3rem;
    flex-wrap: wrap;
    line-height: 1.1;
  `}
`
