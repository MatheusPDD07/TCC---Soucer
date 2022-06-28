import { darken } from 'polished'
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      width: 30rem;
    `}
  `}
`

export const FileThumbnail = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
    border-radius: ${theme.border.radius};
    margin-bottom: 1.5rem;

    svg {
      font-size: 4rem;
      color: ${theme.colors.title};
    }
  `}
`

export const Title = styled.h3`
  width: 75%;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.2rem 0;
`

export const TitleArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: thin solid ${theme.colors.lightGray};

    a:first-child {
      color: ${theme.colors.title};

      &:hover {
        color: ${darken(0.1, theme.colors.title)};
      }
    }

    h3 {
      line-height: 1.1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0.2rem 0;
      margin-bottom: 0.5rem;
    }
  `}
`

export const Topic = styled.a``

export const Keys = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${theme.colors.darkGray};
    border-bottom: thin solid ${theme.colors.lightGray};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: thin solid ${theme.colors.lightGray};
  `}
`

export const Photo = styled.div`
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  border-radius: 50%;
  position: relative;

  &:hover img {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`

export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;

    h3 {
      color: ${theme.colors.title};

      &:hover {
        color: ${darken(0.1, theme.colors.title)};
      }
    }
  `}
`

export const Student = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const StatsBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.darkGray};
  `}
`
