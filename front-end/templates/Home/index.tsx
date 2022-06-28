import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Base from 'templates/Base'

import { SITE_NAME } from 'pages/_app'

import Button from 'components/Button'
import { Container } from 'components/Container'

import * as S from './styles'

const Home = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} - Estude com os melhores e transmita seus conhecimentos.`}
        description="Estude com os melhores e transmita seus conhecimentos."
        canonical={`https://studying.mikedev.com.br`}
        openGraph={{
          url: `https://studying.mikedev.com.br`,
          title: `${SITE_NAME} - Estude com os melhores e transmita seus conhecimentos.`,
          description: 'Estude com os melhores e transmita seus conhecimentos.'
        }}
      />
      <S.Cover>
        <Image
          src="/img/hero-bg.jpg"
          alt="Homem sentado com o notebook estudando"
          layout="fill"
        />
      </S.Cover>

      <S.Main>
        <S.HeroContent>
          <Container>
            <h1>Estude com os melhores</h1>
            <p>
              Quer aprender algo novo, se desenvolver profissionalmente ou
              descobrir um novo hobby? Você está no lugar certo.
            </p>
            <Button as="a" href="/sign-up" size="large">
              Cadastre-se Gratuitamente
            </Button>
          </Container>
        </S.HeroContent>
        <S.Copyright>
          <Container>
            <small>
              &copy; copyright{' '}
              {currentYear === 2022 ? currentYear : `2022 - ${currentYear}`} -
              Studying - Todos os direitos reservados.
            </small>
          </Container>
        </S.Copyright>
      </S.Main>
    </Base>
  )
}

export default Home
