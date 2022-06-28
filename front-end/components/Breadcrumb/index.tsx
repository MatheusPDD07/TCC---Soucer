import Link from 'next/link'
import { useSession } from 'next-auth/client'

export type BreadcrumbProps = {
  title: string
  supTitle?: string
  supUrl?: string
}

import * as S from './styles'

const Breadcrumb = ({ title, supTitle, supUrl = '' }: BreadcrumbProps) => {
  const [session] = useSession()
  const userArea = session?.isAdmin ? 'admin' : 'student'
  return (
    <S.Wrapper>
      <Link href={`/${userArea}/dashboard`} passHref>
        <a>Dashboard</a>
      </Link>
      {!!supTitle && (
        <>
          /
          <Link href={`/${userArea}${supUrl}`} passHref>
            <a>{supTitle}</a>
          </Link>
        </>
      )}
      / <p>{title}</p>
    </S.Wrapper>
  )
}

export default Breadcrumb
