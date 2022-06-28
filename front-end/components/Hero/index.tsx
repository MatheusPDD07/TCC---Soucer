/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/client'

import Button from 'components/Button'

import { SaudationMessage } from 'utils/saudationMessage'

import * as S from './styles'

export type HeroProps = {
  name: string
  countVideos?: number
  countDocuments?: number
  countStudents?: number
}

const Hero = ({
  name,
  countVideos,
  countDocuments,
  countStudents
}: HeroProps) => {
  const [session] = useSession()
  const message = SaudationMessage()

  return (
    <S.Wrapper isAdmin={session?.isAdmin as boolean}>
      <>
        <S.HeroContent>
          <h1>
            {message}, {name}!
          </h1>
          <p>
            O conhecimento é a <span>única chave</span> que abre as portas do
            futuro.
          </p>
          {!session?.isAdmin && (
            <S.Buttons>
              <Button bgColor="white" as="a" href={'/student/video'}>
                Assitir Vídeos
              </Button>
              <Button bgColor="white" as="a" href={'/student/document'}>
                Acessar Documentos
              </Button>
            </S.Buttons>
          )}
        </S.HeroContent>

        {!session?.isAdmin && (
          <S.HeroImage>
            <img
              src="/img/student-and-teachers.png"
              alt="Student and Teacher"
            />
          </S.HeroImage>
        )}

        {session?.isAdmin && (
          <S.DataArea>
            <h3>Dados Atuais da Plataforma:</h3>
            <S.Data>
              <S.Box>
                <h1>{countVideos}</h1>
                <p>Videos</p>
              </S.Box>
              <S.Box>
                <h1>{countDocuments}</h1>
                <p>Documentos</p>
              </S.Box>
              <S.Box>
                <h1>{countStudents}</h1>
                <p>Estudantes</p>
              </S.Box>
            </S.Data>
          </S.DataArea>
        )}
      </>
    </S.Wrapper>
  )
}

export default Hero
