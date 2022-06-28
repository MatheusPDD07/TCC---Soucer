import axios from 'axios'
import { NextSeo } from 'next-seo'
import { GetServerSidePropsContext } from 'next'

import ConfirmEmail, { ConfirmEmailProps } from 'templates/ConfirmEmail'

import { SITE_NAME } from './_app'

export default function ConfirmEmailPage(props: ConfirmEmailProps) {
  return (
    <>
      <NextSeo title={`Confirmação de E-mail - ${SITE_NAME}`} />
      <ConfirmEmail {...props} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = { isConfirmed: false, errorMessage: '' }
  const code = context.req.url!.toString().split('=')[1] + '=='

  await axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/account/confirmEmail`,
      {
        email: context.query.email,
        code
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(function () {
      data.isConfirmed = true
    })
    .catch((error) => {
      data.isConfirmed = false
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error.response.data.errors.map((confrimEmailError: any) => {
        data.errorMessage = confrimEmailError.errorMessage
      })
    })

  return {
    props: {
      ...data
    }
  }
}
