import { darken } from 'polished'
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    position: relative;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    ${media.greaterThan('medium')`
      width: 31rem;
    `}
  `}
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

export const Cover = styled.div`
  width: 100%;
  height: 15.2rem;
  overflow: hidden;
  cursor: pointer;
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

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
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

export const Student = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Data = styled.small`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Views = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;

    svg {
      color: ${theme.colors.darkGray};
    }
  `}
`

export const Topic = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`
