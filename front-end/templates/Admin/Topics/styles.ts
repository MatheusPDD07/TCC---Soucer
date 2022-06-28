import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 1rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const FilterHeaderArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  ${ButtonStyles.Wrapper} {
    padding: 0 1rem;
  }
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const ModalContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    z-index: 60;
  `}
`

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    text-align: center;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
  `}
`

export const ModalTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const ModalBody = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.large};
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
  `}
`

export const DeleteMessageButtons = styled.div`
  display: flex;
  gap: 2rem;
`
