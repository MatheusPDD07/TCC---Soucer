import { NextSeo } from 'next-seo'

import { SITE_NAME } from 'pages/_app'

import FormForgotPassword from 'components/FormForgotPassword'

import Auth from 'templates/Auth'

export default function ForgotPassword() {
  return (
    <Auth title="Esqueci minha senha">
      <NextSeo title={`Esqueci minha senha - ${SITE_NAME}`} />
      <FormForgotPassword />
    </Auth>
  )
}
