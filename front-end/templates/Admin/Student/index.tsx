import { NextSeo } from 'next-seo'

import { SITE_NAME } from 'pages/_app'
import Base, { UserData } from '../Base'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

import { StudentCrudCardProps } from 'components/StudentCrudCard'
import StudentCrudCardPagination from 'components/StudentCrudCardPagination'

export type StudentTemplateProps = {
  user: UserData
  students: StudentCrudCardProps[]
}

const StudentAdminTemplate = ({ user, students }: StudentTemplateProps) => {
  return (
    <Base user={user}>
      <NextSeo title={`Estudantes - ${SITE_NAME}`} />

      <S.Top>
        <S.Title>Estudantes</S.Title>
      </S.Top>

      <StudentCrudCardPagination items={students} />
    </Base>
  )
}

export default StudentAdminTemplate
