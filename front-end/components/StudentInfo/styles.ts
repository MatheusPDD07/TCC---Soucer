import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    box-shadow: 0 0 10px ${theme.colors.lightGray};
  `}
`

export const DataArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const PhotoBox = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  ${media.lessThan('medium')`
    width: 6rem;
    height: 6rem;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Name = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.title};

    ${media.lessThan('medium')`
      text-align: center;
    `}
  `}
`

export const InfoArea = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const ContactData = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    small {
      color: ${theme.colors.secondary};
    }

    svg {
      color: ${theme.colors.mediumGray};
    }

    ${media.lessThan('medium')`
      margin-top: 1rem;
      gap: 0;
      flex-wrap: wrap;
      justify-content: center;
    `}
  `}
`
