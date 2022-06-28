import * as S from './styles'

export type ModalProps = {
  templateIsOpen: boolean
  children: React.ReactNode
}

const Modal = ({ templateIsOpen, children }: ModalProps) => {
  return (
    <S.Wrapper
      aria-label="modal"
      aria-hidden={!templateIsOpen}
      isOpen={templateIsOpen}
    >
      {children}
    </S.Wrapper>
  )
}

export default Modal
