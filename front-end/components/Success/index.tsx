import * as S from './styles'

import { MdCheck } from 'react-icons/md'

const Success = () => (
  <S.Wrapper>
    <S.CheckBox>
      <MdCheck size={45} color="#FFFFFF" />
    </S.CheckBox>
    <h1>E-mail confirmado</h1>
    <p>Seja bem-vindo(a) a comunidade Studying!</p>
  </S.Wrapper>
)

export default Success
