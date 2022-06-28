import { ToastContainer } from 'react-toastify'

import MediaMatch from 'components/MediaMatch'
import ProfileStudentMenu from 'components/ProfileStudentMenu'
import MobileStudentProfileMenu from 'components/MobileStudentProfileMenu'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

export type UserData = {
  name: string
  lastName: string
  imageUrl: string
  points: number
}

export type BaseProps = {
  user: UserData
  pageTitle?: string
  children: React.ReactNode
}

const Base = ({ user, children }: BaseProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <S.Wrapper>
        <MediaMatch greaterThan="medium">
          <ProfileStudentMenu
            name={`${user.name} ${user.lastName} `}
            photo={user.imageUrl ? user.imageUrl : '/img/default-image.png'}
            point={user.points}
          />
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <MobileStudentProfileMenu
            name={`${user.name} ${user.lastName} `}
            photo={user.imageUrl ? user.imageUrl : '/img/default-image.png'}
            point={user.points}
          />
        </MediaMatch>
        <S.RightSide>
          <S.Content>{children}</S.Content>
          <S.Copyright>
            &copy; copyright{' '}
            {currentYear === 2022 ? currentYear : `2022 - ${currentYear}`} -
            Studying - Todos os direitos reservados.
          </S.Copyright>
        </S.RightSide>
      </S.Wrapper>

      <ToastContainer />
    </>
  )
}

export default Base
