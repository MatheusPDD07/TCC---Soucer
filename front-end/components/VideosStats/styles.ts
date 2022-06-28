import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 10px ${theme.colors.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  `}
`

export const SuperTitle = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`

export const StatsArea = styled.div`
  flex: 1;
`

export const StatsCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 7rem;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: thin solid ${theme.colors.lightGray};
    }
  `}
`

export const Thumb = styled.div`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const Title = styled.h5`
  ${({ theme }) => css`
    flex: 1;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${theme.colors.title};
  `}
`

export const Views = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.darkGray};
  `}
`
