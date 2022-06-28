import Base from 'templates/Base'
import Empty from 'components/Empty'
import Success from 'components/Success'

import * as S from './styles'

export type ConfirmEmailProps = {
  isConfirmed: boolean
  errorMessage?: string
}

const ConfirmEmail = ({
  isConfirmed,
  errorMessage = ''
}: ConfirmEmailProps) => (
  <Base>
    <S.Wrapper>
      {isConfirmed ? (
        <Success />
      ) : (
        <Empty title="Erro" description={errorMessage} hasLink />
      )}
    </S.Wrapper>
  </Base>
)

export default ConfirmEmail
