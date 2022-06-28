import Image from 'next/image'

import Button from 'components/Button'
import { StudentData } from 'components/VideoCard'

import { MdCircle, MdOutlineArrowForward } from 'react-icons/md'

import * as S from './styles'

const StudentInfo = ({
  id,
  imageUrl,
  lastName,
  name,
  email,
  userName
}: StudentData) => {
  return (
    <S.Wrapper>
      <S.DataArea>
        <S.PhotoBox>
          <Image
            src={imageUrl ? imageUrl : '/img/default-image.png'}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </S.PhotoBox>
        <S.InfoArea>
          <S.Name>
            {name} {lastName}
          </S.Name>
          {email && userName && (
            <S.ContactData>
              <small>@{userName}</small>
              <MdCircle size={8} />
              <small>{email}</small>
            </S.ContactData>
          )}
        </S.InfoArea>
      </S.DataArea>
      {id && (
        <Button
          icon={<MdOutlineArrowForward size={24} />}
          size="small"
          bgColor="primary"
          as="a"
          href={`/student/user/${id}`}
        />
      )}
    </S.Wrapper>
  )
}

export default StudentInfo
