import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import NextAuth, { User, Session } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

import api from 'service/api'

type AuthorizeProps = {
  userName: string
  password: string
}

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ userName, password }: AuthorizeProps) {
        const response = await api.post(
          '/account/login',
          {
            userName,
            password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        const data = await response.data

        if (data.student) {
          return {
            ...data.student,
            jwt: data.tokenString
          }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt
      session.id = user.id
      session.isAdmin = user.isAdmin
      session.lastName = user.lastName

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User) => {
      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin as boolean
        token.lastName = user.lastName as string
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => {
  NextAuth(req, res, options)
}
export default Auth
