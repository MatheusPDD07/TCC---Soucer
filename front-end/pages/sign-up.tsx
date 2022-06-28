import { NextSeo } from 'next-seo'

import { SITE_NAME } from 'pages/_app'

import FormSignUp from 'components/FormSignUp'

import Auth from 'templates/Auth'

export default function SignUp() {
  return (
    <Auth>
      <NextSeo
        title={`Cadastro - ${SITE_NAME}`}
        description="Cadastre-se em nossa plataforma para estudar ou adicionar um curso aos favoritos."
        canonical={`https://studying.mikedev.com.br/sign-up`}
        openGraph={{
          url: `https://studying.mikedev.com.br/sign-up`,
          title: `Cadastro - ${SITE_NAME}`,
          description:
            'Cadastre-se em nossa plataforma para estudar ou adicionar um curso aos favoritos.'
        }}
      />
      <FormSignUp />
    </Auth>
  )
}
