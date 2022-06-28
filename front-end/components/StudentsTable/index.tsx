import * as S from './styles'

export type StudentData = {
  name: string
  points: number
}

export type StudentsTableProps = {
  students: StudentData[]
}

const StudentsTable = ({ students }: StudentsTableProps) => (
  <S.Wrapper>
    <table width="100%" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th align="left" className="primeiraColuna">
            Estudantes
          </th>
          <th align="center">Pontos</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan={3} align="center">
              Não há estudantes cadastrados no momento
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td align="center">{student.points}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </S.Wrapper>
)

export default StudentsTable
