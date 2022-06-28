import Image from 'next/image'

import Button from 'components/Button'

import * as S from './styles'

export type StudentsStatsData = {
  photo: string
  name: string
  points: string
}

export type StudentsStatsProps = {
  students: StudentsStatsData[]
  title: string
}

const StudentsStats = ({ students, title }: StudentsStatsProps) => (
  <S.Wrapper>
    <S.SuperTitle>{title}</S.SuperTitle>
    <S.StatsArea>
      {students?.map((students, index) => (
        <S.StatsCard key={index}>
          <S.Thumb>
            <Image
              src={students.photo ? students.photo : '/img/default-image.png'}
              alt={students.name}
              layout="fill"
              objectFit="cover"
            />
          </S.Thumb>
          <S.Title>{students.name}</S.Title>
          <S.Views>
            <small>{students.points} pontos</small>
          </S.Views>
        </S.StatsCard>
      ))}
    </S.StatsArea>
    <Button minimal fullWidth size="small" as="a" href={'/admin/student'}>
      Ir aos Estudantes
    </Button>
  </S.Wrapper>
)

export default StudentsStats
