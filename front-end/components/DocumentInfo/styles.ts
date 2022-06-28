import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    line-height: 1.2;
    color: ${theme.colors.title};
    padding-bottom: 1rem;
    margin: 1rem 0;
    border-bottom: thin solid ${theme.colors.lightGray};

    ${media.lessThan('medium')`
      margin: 2rem 0 1rem;
    `}
  `}
`

export const Stats = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: thin solid ${theme.colors.lightGray};

    ${media.lessThan('medium')`
      gap: 1rem;
    `}
  `}
`

export const StatsBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: 1rem 1.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.title};

    ${media.lessThan('medium')`
      flex: 1;
      flex-direction: column;
    `}

    &.boxClick {
      cursor: pointer;
    }

    &.active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary};
    }
  `}
`

export const Keys = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: thin solid ${theme.colors.lightGray};

    small {
      color: ${theme.colors.darkGray};
    }
  `}
`
