import Link from 'next/link'

import * as S from './styles'

export type TopicProps = {
  icon: JSX.Element
  title: string
  slug: string
}

const Topic = ({ icon, title, slug }: TopicProps) => {
  return (
    <Link href={`/topic/${slug}`} passHref>
      <a>
        <S.Wrapper>
          <S.IconBox>{icon}</S.IconBox>
          <S.Title>{title}</S.Title>
        </S.Wrapper>
      </a>
    </Link>
  )
}

export default Topic
