import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .react-tabs__tab-list {
      list-style: none;
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-bottom: ${theme.spacings.medium};

      ${media.greaterThan('medium')`
        gap: 3rem;
      `}
    }

    .react-tabs__tab {
      color: ${theme.colors.title};
      outline: none;
      cursor: pointer;
      font-weight: ${theme.font.bold};
    }

    .react-tabs__tab--selected {
      border-bottom: 3px solid ${theme.colors.secondary};
    }
  `}
`

export const StudentArea = styled.div`
  ${({ theme }) => css`
    width: 50%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`
