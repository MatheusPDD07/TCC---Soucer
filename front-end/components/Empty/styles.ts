import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  ${media.lessThan('medium')`
    width: 100%;
    flex-direction: column;
  `}
`

export const ImageBox = styled.div`
  text-align: center;
`

export const Image = styled.img`
  max-width: 100%;
`

export const InfoArea = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.xxlarge};
    margin-top: ${theme.spacings.small};
  `}
`

export const description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.regular};
    margin-bottom: ${theme.spacings.medium};
  `}
`
