/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import { ErrorMessage, SuccessMessage } from 'utils/messages'
import { FieldErrors, resetValidate } from 'utils/validations'

import { MdOutlineAccountCircle, MdLockOutline } from 'react-icons/md'

import api from 'service/api'

import 'react-toastify/dist/ReactToastify.css'

export type ResetPasswordProps = {
  code: string
}

const FormResetPassword = ({ code }: ResetPasswordProps) => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    userName: '',
    password: '',
    confirm_password: ''
  })
  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // fazer chamada para o endpoint de login
    await api
      .post(
        '/account/recoverPasswordPhase2',
        {
          userName: values.userName,
          number: code,
          newPassword: values.password,
          confirmNewPassword: values.confirm_password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          SuccessMessage('Senha resetada com sucesso!')
          setTimeout(() => {
            push('/')
          }, 6000)
        }
      })
      .catch((error) => {
        error.response.data.errors.map((resetPasswordError: any) =>
          ErrorMessage(resetPasswordError.errorMessage)
        )
      })

    setLoading(false)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="userName"
          mask={''}
          placeholder="Usuário"
          value={values.userName}
          type="text"
          onInputChange={(v) => handleInput('userName', v!)}
          icon={<MdOutlineAccountCircle />}
          error={fieldError?.userName}
        />
        <TextField
          name="password"
          mask={''}
          placeholder="Senha"
          value={values.password}
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v!)}
          icon={<MdLockOutline />}
        />
        <TextField
          name="confirm_password"
          mask={''}
          placeholder="Confirmar Senha"
          value={values.confirm_password}
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v!)}
          icon={<MdLockOutline />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Resetar Senha</span>}
        </Button>
      </form>
      <ToastContainer />
    </FormWrapper>
  )
}

export default FormResetPassword
