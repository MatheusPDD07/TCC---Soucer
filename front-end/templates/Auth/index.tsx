import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

type AuthProps = {
  title?: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="Studying Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <S.BannerTitle>
          Estude com os melhores e transmita seus conhecimentos
        </S.BannerTitle>

        <S.Footer>
          Studying {currentYear} © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <S.LogoBox>
          <Link href="/">
            <a>
              <Image
                src="/img/logo-color.svg"
                alt="Studying Auth Page"
                width={230}
                height={148}
              />
            </a>
          </Link>
        </S.LogoBox>

        <S.FormTitle>{title}</S.FormTitle>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
