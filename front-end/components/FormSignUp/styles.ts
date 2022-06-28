import styled, { css } from 'styled-components'

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
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
    width: 60rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    background-color: ${theme.colors.background};
    border-bottom: thin solid ${theme.colors.lightGray};
  `}
`

export const ModalTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const ModalBody = styled.div`
  ${({ theme }) => css`
    padding: 2rem;

    h4 {
      color: ${theme.colors.tertiary};
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 3rem;

      &:not(:last-child) {
        margin-bottom: 4rem;
      }
    }
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    padding: 1rem 2rem;
    background-color: ${theme.colors.background};
    border-top: thin solid ${theme.colors.lightGray};
    text-align: center;
  `}
`
