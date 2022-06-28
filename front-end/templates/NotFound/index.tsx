import * as S from './styles'

export type NotFoundProps = {
  children: React.ReactNode
}

const NotFound = ({ children }: NotFoundProps) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default NotFound
