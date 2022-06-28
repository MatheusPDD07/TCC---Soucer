import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as SelectStyles from 'components/Select/styles'
import * as TextfildsStyles from 'components/TextField/styles'

export const PhotoArea = styled.div`
  width: 7rem;
  height: 7rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    border: 2px dashed ${theme.colors.title};

    p {
      font-family: ${theme.font.family};
      color: ${theme.colors.title};
    }

    span {
      color: ${theme.colors.secondary};
    }

    ${media.lessThan('medium')`
      padding: 1rem;
    `}
  `}
`

export const UploadPhotoArea = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 2rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover ${PhotoArea} img {
    transform: scale(1.1);
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const PreviewPhoto = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  position: relative;
`

export const FormUpdateArea = styled.div`
  margin-top: 4rem;

  form {
    padding: 2rem;
  }

  ${media.lessThan('medium')`
    margin-top: 2rem;
    form {
      padding: 0;
    }
  `}
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${TextfildsStyles.Wrapper},
  ${SelectStyles.Wrapper} {
    flex: 1;
  }
`

export const FieldsBox = styled.span`
  display: flex;
  gap: 2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}
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
    width: 50%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    z-index: 60;

    ${media.lessThan('medium')`
      width: 100%;
    `}
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

    input {
      width: 100%;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    ${media.lessThan('medium')`
      padding: ${theme.spacings.small};
    `}
  `}
`

export const ImageCropper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .box {
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
  }
  .img-preview {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    justify-content: center;

    .box {
      width: 8rem;
      height: 8rem;
    }
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

export const FooterButtons = styled.div`
  display: flex;
  gap: 2rem;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    gap: 1rem;
  `}
`
