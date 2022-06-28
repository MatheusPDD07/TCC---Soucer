import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    display: block;
  `}
`

export const RightSide = styled.div`
  flex: 1;
  overflow-y: auto;
  gap: 2rem;
  display: flex;
  padding: 0 1.3rem 7rem;
  flex-direction: column;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    height: 100vh;
    padding: 3.2rem 3.2rem 3.2rem 0;
  `}

  .TUEFO {
    padding: 4px 16px;
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }
`

export const Content = styled.div`
  margin-bottom: 1rem;
`

export const Copyright = styled.small`
  text-align: center;

  ${media.greaterThan('medium')`
    text-align: left;
  `}
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`
