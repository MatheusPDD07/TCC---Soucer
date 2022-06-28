import * as S from './styles'

export type VideoStatsData = {
  title: string
  views: number
}

export type VideoTableProps = {
  videos: VideoStatsData[]
}

const VideosTable = ({ videos }: VideoTableProps) => (
  <S.Wrapper>
    <table width="100%" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th align="left" className="primeiraColuna">
            Vídeos
          </th>
          <th align="center">Visualizações</th>
        </tr>
      </thead>
      <tbody>
        {videos.length === 0 ? (
          <tr>
            <td colSpan={3} align="center">
              Não há vídeos cadastrados no momento
            </td>
          </tr>
        ) : (
          videos.map((video) => (
            <tr key={video.title}>
              <td>{video.title}</td>
              <td align="center">{video.views}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </S.Wrapper>
)

export default VideosTable
