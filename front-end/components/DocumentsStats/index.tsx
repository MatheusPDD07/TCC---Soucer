import { useSession } from 'next-auth/client'

import Button from 'components/Button'

import { VscFilePdf } from 'react-icons/vsc'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

import * as S from './styles'

export type DocumentsStatsData = {
  title: string
  views: number
}

export type DocumentsStatsProps = {
  documents: DocumentsStatsData[]
  title: string
}

const DocumentsStats = ({ documents, title }: DocumentsStatsProps) => {
  const [session] = useSession()

  return (
    <S.Wrapper>
      <S.SuperTitle>{title}</S.SuperTitle>
      <S.StatsArea>
        {documents?.map((document, index) => (
          <S.StatsCard key={index}>
            <S.Thumb>
              <VscFilePdf />
            </S.Thumb>
            <S.Title>{document.title}</S.Title>
            <S.Views>
              <MdOutlineRemoveRedEye size={18} />
              <small>{document.views}</small>
            </S.Views>
          </S.StatsCard>
        ))}
      </S.StatsArea>
      <Button
        minimal
        fullWidth
        size="small"
        as="a"
        href={`/${session?.isAdmin ? 'admin' : 'student'}/document`}
      >
        {session?.isAdmin ? 'Ir aos Documentos' : 'Ver Meus Documentos'}
      </Button>
    </S.Wrapper>
  )
}

export default DocumentsStats
