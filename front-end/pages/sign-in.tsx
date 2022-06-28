import { NextSeo } from 'next-seo'

import { SITE_NAME } from 'pages/_app'

import FormSignIn from 'components/FormSignIn'

import Auth from 'templates/Auth'

export default function SignIn() {
  return (
    <Auth title="Use seus dados para entrar e vamos aos estudos!">
      <NextSeo
        title={`Entrar - ${SITE_NAME}`}
        description="Estude com os melhores e transmita seus conhecimentos."
        canonical={`https://studying.mikedev.com.br/sign-in`}
        openGraph={{
          url: `https://studying.mikedev.com.br/sign-in`,
          title: `Entrar - ${SITE_NAME}`,
          description: 'Estude com os melhores e transmita seus conhecimentos.'
        }}
      />
      <FormSignIn />
    </Auth>
  )
}
