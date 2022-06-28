import * as S from './styles'

export type DocumentsStatsData = {
  title: string
  views: number
}

export type DocumentsTableProps = {
  documents: DocumentsStatsData[]
}

const DocumentsTable = ({ documents }: DocumentsTableProps) => (
  <S.Wrapper>
    <table width="100%" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th align="left" className="primeiraColuna">
            Documentos
          </th>
          <th align="center">Visualizações</th>
        </tr>
      </thead>
      <tbody>
        {documents.length === 0 ? (
          <tr>
            <td colSpan={3} align="center">
              Não há documentos cadastrados no momento
            </td>
          </tr>
        ) : (
          documents.map((document) => (
            <tr key={document.title}>
              <td>{document.title}</td>
              <td align="center">{document.views}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </S.Wrapper>
)

export default DocumentsTable
