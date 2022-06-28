import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
  pageButton?: React.ReactNode
}

const Empty = ({ title, description, hasLink, pageButton }: EmptyProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <S.Image
        src="/img/students.svg"
        alt="estudantes ao redor de livros"
        role="image"
        width={350}
      />
    </S.ImageBox>

    <S.InfoArea>
      <S.Title>{title}</S.Title>
      <S.description>{description}</S.description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a" bgColor="secondary">
            Voltar a Página Inicial
          </Button>
        </Link>
      )}

      {pageButton && pageButton}
    </S.InfoArea>
  </S.Wrapper>
)

export default Empty
