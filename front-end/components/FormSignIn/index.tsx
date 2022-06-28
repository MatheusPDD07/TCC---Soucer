import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { ToastContainer } from 'react-toastify'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormLoading, FormWrapper } from 'components/Form'

import { ErrorMessage } from 'utils/messages'
import { FieldErrors, signInValidate } from 'utils/validations'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

import { MdOutlineAccountCircle, MdLock } from 'react-icons/md'

const FormSignIn = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ userName: '', password: '' })
  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // fazer chamada para o endpoint de login
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${
        query?.callbackUrl || '/student/dashboard'
      }`
    })

    if (result?.url) {
      return push(result?.url)
    } else {
      ErrorMessage(
        'Usuário e/ou senha inválidos ou não foi confirmado o e-mail.'
      )
    }

    setLoading(false)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="userName"
          mask={''}
          placeholder="Usuário"
          type="text"
          onInputChange={(v) => handleInput('userName', v!)}
          icon={<MdOutlineAccountCircle />}
          error={fieldError?.userName}
        />
        <TextField
          name="password"
          mask={''}
          placeholder="Senha"
          type="password"
          onInputChange={(v) => handleInput('password', v!)}
          icon={<MdLock />}
          error={fieldError?.password}
        />

        <Link href="/forgot-password" passHref>
          <S.ForgotPassword href="#">Esqueci minha senha</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Entrar Agora</span>}
        </Button>

        <FormLink>
          Ainda não tem uma conta?{' '}
          <Link href="/sign-up">
            <a>Cadastre-se</a>
          </Link>
        </FormLink>
      </form>
      <ToastContainer />
    </FormWrapper>
  )
}

export default FormSignIn
