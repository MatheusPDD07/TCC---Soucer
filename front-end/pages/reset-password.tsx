import { NextSeo } from 'next-seo'

import { SITE_NAME } from 'pages/_app'

import FormResetPassword from 'components/FormResetPassword'

import Auth from 'templates/Auth'
import { useRouter } from 'next/router'

export default function ResetPassword() {
  const { asPath } = useRouter()
  const code = asPath.split('=')
  return (
    <Auth title="Resetar Minha Senha">
      <NextSeo title={`Resetar Minha Senha - ${SITE_NAME}`} />
      <FormResetPassword code={code[1]} />
    </Auth>
  )
}
