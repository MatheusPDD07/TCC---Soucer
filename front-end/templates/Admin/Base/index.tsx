import { ToastContainer } from 'react-toastify'

import MediaMatch from 'components/MediaMatch'
import ProfileAdminMenu from 'components/ProfileAdminMenu'
import MobileAdminProfileMenu from 'components/MobileAdminProfileMenu'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

export type UserData = {
  name: string
  photo: string
}

export type BaseProps = {
  user: UserData
  children: React.ReactNode
}

const Base = ({ user, children }: BaseProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <S.Wrapper>
        <MediaMatch greaterThan="medium">
          <ProfileAdminMenu
            name={user.name}
            photo={user.photo ? user.photo : '/img/default-image.png'}
          />
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <MobileAdminProfileMenu
            name={user.name}
            photo={user.photo ? user.photo : '/img/default-image.png'}
          />
        </MediaMatch>
        <S.RightSide>
          <div>{children}</div>
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
