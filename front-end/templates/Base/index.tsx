import { useSession } from 'next-auth/client'

import Menu from 'components/Menu'
import { Container } from 'components/Container'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const [session, loading] = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu
          username={session?.user?.name}
          isAdmin={session?.isAdmin as boolean}
          loading={loading}
        />
      </Container>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Base
